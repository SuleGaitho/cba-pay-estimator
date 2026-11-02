// Run: node tests.js   (reads index.html in this folder)
// Checks the calculation engine against the sample payslips in the Return to Work Formula
// and tests invariants across grades and notches.
const fs = require("fs");
const path = require("path");

// The calculation engine is inside index.html (the part before the interface code)
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const engine = html.split("<script>")[1].split("/* ===== Language ===== */")[0];
const api = new Function(engine + `
  return {houseSuggestion, pensionCheck, missingIds, resolveHrLang, loansFromTotal, payslip, arrearsPay, lumpPay, schedule, compute, setCat, TABLE: () => TABLE,
          setCAT: v => { CAT = v; TABLE = v === "UASU" ? UASU_TABLE : KUSU_TABLE; },
          KUSU_TABLE, UASU_TABLE};
`)();

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log("PASS  " + name); }
  else { fail++; console.log("FAIL  " + name + (detail ? "  (" + detail + ")" : "")); }
}
const near = (a, b, tol = 1) => Math.abs(a - b) <= tol;

// Base inputs matching the agreement sample: grade 10A, notch 12, commuter 15,000, house 27,800, pension 10%, NSSF on, July increments
function inputs(over = {}) {
  return Object.assign({
    g0: 10, n0: 12, cur: 15000, house: 27800, pct: 10, nssf: true,
    inc: 6, mode: "gradual", book: 6, promo: null, check: null, slipNet: null
  }, over);
}

// 1. Sample payslip figures from the agreement pack
api.setCAT("UASU");
const p = inputs();
const slipOct = api.payslip(140788, 97988, p);
check("October 2026 take-home = 88,625", near(slipOct.net, 88625), slipOct.net);
check("October 2026 PAYE = 27,941", near(slipOct.paye, 27941), slipOct.paye);
const inst = api.arrearsPay(62760, 58760, slipOct, p);
check("Instalment PAYE = 16,265", near(inst.paye, 16265), inst.paye);
check("Instalment take-home = 36,696", near(inst.net, 36696), inst.net);
const slipJan = api.payslip(161422, 116622, p);
check("January 2027 take-home = 100,778", near(slipJan.net, 100778), slipJan.net);
const arr2 = api.arrearsPay(123804, 111804, slipJan, p);
check("Jul-Dec 2026 take-home = 72,677", near(arr2.net, 72677), arr2.net);

const c = api.compute(p);
check("Back pay 2025/26 (gross) = 188,280", near(c.a1G, 188280), c.a1G);
check("Back pay Jul-Dec 2026 (gross) = 123,804", near(c.a2G, 123804), c.a2G);
check("Yearly gains sum to 1,103,772 plus four Book and ICT payments of 10,000 (grade 10A)", near(c.gain[1] + c.gain[2] + c.gain[3] + c.gain[4], 1143772), c.gain.join(","));

// 2. Schedule invariants
const rows = api.schedule(p);
check("Schedule has 48 months", rows.length === 48);
check("Notch 12 never increments", rows.every(r => r.n === 12));
check("Basic matches table for each financial year", rows.every(r => r.basic === api.TABLE()[10][11][r.fy]));

const incRows = api.schedule(inputs({ n0: 3 }));
const notches = incRows.map(r => r.n);
check("Notch rises by 1 in each July from July 2026", notches[12] === 4 && notches[24] === 5 && notches[36] === 6 && notches[11] === 3, notches.slice(0, 13).join(","));

const janInc = api.schedule(inputs({ n0: 3, inc: 0 }));
check("January increment starts January 2026 (month 6)", janInc[6].n === 4 && janInc[5].n === 3);

// 3. Commuter modes
const grad = api.schedule(inputs({ mode: "gradual" }));
const full = api.schedule(inputs({ mode: "full" }));
check("Full commuter is 18,000 from July 2025", full[0].commuter === 18000);
check("Gradual commuter in 2025/26 is 16,000", grad[0].commuter === 16000);
check("Gradual commuter reaches 18,000 by 2027/28", grad[24].commuter === 18000);
check("Full commuter never below gradual", full.every((r, i) => r.commuter >= grad[i].commuter));

// 4. Promotion raises pay
const noPromo = api.compute(inputs());
// Grade 11A notch 1 pays less than grade 10A notch 12, so the test promotes to notch 12
const promo = api.compute(inputs({ promo: { m: 12, grade: 11, notch: 12 } }));
check("Promotion to a higher grade raises back pay", promo.a1G + promo.a2G > noPromo.a1G + noPromo.a2G);

// 5. Book and ICT allowance (academic staff, grade 15A)
const book = api.compute(inputs({ g0: 15, n0: 1, book: 6 }));
check("Book and ICT paid once a year (4 payments in horizon)", book.bookPays.length === 4, book.bookPays.length);
check("Book and ICT amount is 18,500 for 15A", book.bookPays.every(b => b.amount === 18500));
const noBookKusu = (api.setCAT("KUSU"), api.compute(inputs({ g0: 10 })));
check("No book and ICT payments for administrative staff", noBookKusu.bookPays.length === 0);
api.setCAT("UASU");

// 6. Professorial allowance only for 15A and 14A
const prof15 = api.schedule(inputs({ g0: 15, n0: 1 }));
const prof13 = api.schedule(inputs({ g0: 13, n0: 1 }));
check("Professorial allowance 7,500 for 15A", prof15[0].prof === 7500);
check("No professorial allowance for 13A", prof13[0].prof === 0);

// 7. Edge cases: every grade and notch produces finite, non-negative results
let bad = [];
for (const [cat, grades] of [["UASU", [10, 11, 12, 13, 14, 15]], ["KUSU", [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]]) {
  api.setCAT(cat);
  for (const g of grades) for (let n = 1; n <= 12; n++) {
    const r = api.compute(inputs({ g0: g, n0: n, inc: 1, mode: "full" }));
    const vals = [r.a1G, r.a2G, r.netExtra, r.inst.net, r.arr2.net, r.jan.slip.net];
    if (vals.some(v => !Number.isFinite(v))) bad.push(cat + g + "." + n);
    if (r.a1G < 0 || r.a2G < 0) bad.push("negative back pay " + cat + g + "." + n);
  }
}
check("All grades and notches give finite, non-negative results", bad.length === 0, bad.slice(0, 5).join(" "));
api.setCAT("UASU");

// 8. Zero pension and NSSF off
const noNssf = api.payslip(140788, 97988, inputs({ nssf: false, pct: 0 }));
check("NSSF off and pension 0 gives no NSSF or pension", noNssf.nssf === 0 && noNssf.pension === 0);

// 9. Other allowances (e.g. hardship) are taxable and included in gross
api.setCAT("KUSU");
const base = api.compute(inputs({ g0: 8, n0: 12 }));
const withOther = api.compute(inputs({ g0: 8, n0: 12, otherAllow: 10000 }));
check("Other allowances add to current gross", near(withOther.oldGross - base.oldGross, 10000), withOther.oldGross - base.oldGross);
check("Other allowances raise PAYE (taxable)", withOther.oldSlip.paye > base.oldSlip.paye);
check("Other allowances are the same in every year", withOther.rows.every((r, i) => near(r.gross - base.rows[i].gross, 10000)));
api.setCAT("UASU");

// 10. Loans from the payslip total deduction line
api.setCAT("UASU");
const bslip = api.compute(inputs()).oldSlip;
const statutory = bslip.nssf + bslip.paye + bslip.shif + bslip.housing + bslip.pension + bslip.union;
check("Loans from total deduction = total minus statutory items", api.loansFromTotal(inputs(), bslip, statutory + 12345) === 12345);
check("Loans from total never below zero", api.loansFromTotal(inputs(), bslip, 1000) === 0);

// 11. University commuter rate with a review date
api.setCAT("UASU");
const uniBase = { g0: 10, n0: 12, cur: 15000, house: 27800, otherAllow: 0, pct: 10, nssf: true, inc: 6, mode: "gradual", book: 6, promo: null, check: null, slipNet: null, other: 0 };
const uniUntil = api.schedule(Object.assign({}, uniBase, { uniRate: 20000, uniUntil: 18 }));
check("University rate applies up to the review month", uniUntil[17].commuter === 20000, uniUntil[17].commuter);
check("Agreement rate applies from the review month", uniUntil[18].commuter === 17000, uniUntil[18].commuter);
check("Agreement rate reaches 18,000 after the review", uniUntil[24].commuter === 18000, uniUntil[24].commuter);
const uniNoDate = api.schedule(Object.assign({}, uniBase, { uniRate: 20000, uniUntil: null }));
check("Without a review date the university rate lasts the whole period", uniNoDate.every(r => r.commuter === 20000));
api.setCAT("UASU");

// 12. Pension check and warning
const pOk = api.pensionCheck(10, "pct", 0);
check("Pension 10% is not capped", pOk.capped === false && pOk.used === 10);
const pHigh = api.pensionCheck(25, "pct", 0);
check("Pension above 20% is capped to 20% and flagged", pHigh.capped === true && pHigh.used === 20);
const pLow = api.pensionCheck(-3, "pct", 0);
check("Pension below 0% is capped to 0% and flagged", pLow.capped === true && pLow.used === 0);
const pKes = api.pensionCheck(7500, "kes", 73317);
check("Pension in KES converts to about 10.2% of basic and is not flagged", pKes.capped === false && Math.abs(pKes.used - 10.23) < 0.01, pKes.used);

// 13. Missing-field messages
const miss = api.missingIds({ g0: "", n0: "12", commuter: "15000" }, ["g0", "n0", "commuter"]);
check("A blank grade is reported as missing", miss.length === 1 && miss[0] === "g0", miss.join(","));
check("A blank number is reported as missing", api.missingIds({ pension: "" }, ["pension"]).join(",") === "pension");
check("Nothing is reported when all values are set", api.missingIds({ a: "1", b: "0" }, ["a", "b"]).length === 0);

// 14. Printed-summary language
check("Separately saved printed-summary language wins", api.resolveHrLang("sw", { hrLang: "en" }, "en") === "sw");
check("Saved state is used when no separate choice exists", api.resolveHrLang(null, { hrLang: "sw" }, "en") === "sw");
check("Interface language is the last fallback", api.resolveHrLang(null, null, "sw") === "sw");
check("English is the default when nothing is set", api.resolveHrLang(null, null, undefined) === "en");

// 15. Suggested house allowances
check("KUSU grade 8 suggests 28,307", api.houseSuggestion("KUSU", 8) === 28307);
check("UASU grade 10A suggests 35,383", api.houseSuggestion("UASU", 10) === 35383);
check("UASU grade 11A suggests 51,601", api.houseSuggestion("UASU", 11) === 51601);
check("A grade without a confirmed amount is left blank", api.houseSuggestion("UASU", 12) === null && api.houseSuggestion("KUSU", 14) === null);

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
