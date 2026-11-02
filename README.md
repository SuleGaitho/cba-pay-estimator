# CBA 2025-2029 Pay Estimator (V2.1)

A free, browser-based tool that helps Kenyan public university staff estimate their new salary, back pay (arrears) and take-home pay under the **2025-2029 Collective Bargaining Agreement**, as set out in the **Return to Work Formula of 30 October 2026**.

It covers two staff groups:

- **Academic staff (UASU)**: grades 10A to 15A
- **Administrative staff (KUSU)**: grades 5 to 15

**Live tool:** https://SuleGaitho.github.io/cba-pay-estimator/

> **Unofficial estimate.** This tool is for planning only. It is not payroll advice and is not affiliated with IPUCCF, FKE, UASU, KUSU or any university. Confirm every final figure with your university's payroll office.

---

## Contents

1. [What the tool does](#1-what-the-tool-does)
2. [Quick start](#2-quick-start)
3. [Field guide](#3-field-guide)
4. [Understanding the results](#4-understanding-the-results)
5. [How the figures are calculated](#5-how-the-figures-are-calculated)
6. [Assumptions](#6-assumptions)
7. [Not included](#7-not-included)
8. [Worked example](#8-worked-example)
9. [Privacy](#9-privacy)
10. [Sharing and feedback](#10-sharing-and-feedback)
11. [Known limitations](#11-known-limitations)
12. [Maintenance notes](#12-maintenance-notes)
13. [Version history](#13-version-history)
14. [Licence and contact](#14-licence-and-contact)

---

## 1. What the tool does

From the details you enter, the tool works out, month by month from **July 2025 to June 2029**:

- your new **basic salary**, commuter allowance, house allowance and any professorial allowance;
- your **gross and take-home pay** under the new scale, compared with your current payslip;
- your **back pay (arrears)** for July 2025 to December 2026, split into the payments the agreement describes;
- your **PAYE, NSSF, SHIF, housing levy, pension and union dues** for each payment;
- the **annual Book and ICT allowance** for academic staff, if you choose to include it;
- the **extra gross pay for each financial year**, and an approximate **extra take-home to June 2029**.

Every result updates as you change a field. Nothing needs to be submitted.

---

## 2. Quick start

1. **Pick your staff group**: *Academic (UASU)* or *Administrative (KUSU)*. The grade list changes to match.
2. **Choose your grade and notch** exactly as they appear on your **July 2025** payslip.
3. **Enter your current commuter allowance** and **house allowance** (both per month).
4. **Enter your pension percentage** (the share of basic salary you contribute; enter 0 if you don't contribute).
5. **Tick or untick NSSF** so it matches your payslip.
6. **Set your increment month**, the month your notch normally moves up.
7. Optionally open **More options** to set a promotion, the commuter phasing, the Book and ICT payment month (academic staff), or to check your basic against the table.
8. **Read the results.** Check any warning at the top of the page.
9. **Check your entries.** Type your July 2025 basic salary into *Basic on July 2025 payslip (check)*. If it does not match your grade and notch, a warning appears.

---

## 3. Field guide

| Field | What to enter | Default | Effect on the result |
|---|---|---|---|
| **Staff group** | Academic (UASU) or Administrative (KUSU) | Academic | Selects the salary tables, grade list and whether Book and ICT applies. |
| **Grade** | Your grade on the July 2025 payslip (shown as 10A-15A for academic staff, 5-15 for administrative staff) | 10 | Sets your starting salary band. |
| **Notch** | Your notch on the July 2025 payslip (1-12) | 12 | Sets your starting point within the grade. |
| **Commuter now (KES/month)** | Your current commuter allowance | 15,000 | Starting point for the commuter increase to KES 18,000. |
| **House allowance (KES/month)** | Your monthly house allowance | 27,800 | Added unchanged to every month. |
| **Pension (% of basic)** | The percentage of basic salary you contribute (0 to 20) | 10 | Deducted from basic salary before PAYE. |
| **Deduct NSSF** | Tick if NSSF is deducted from your pay | Ticked | Adds NSSF (6% of gross up to KES 108,000). |
| **Increment month** | The month your notch normally moves up | July | Sets when each annual one-notch increment takes effect. |
| **Commuter increase** (More options) | *Phased over 3 years* or *Full KES 18,000 from Jul 2025* | Phased | Chooses how quickly commuter allowance reaches KES 18,000. |
| **Book & ICT paid in** (More options, academic staff) | The month the annual Book and ICT allowance is paid | July | Sets the month of the yearly Book and ICT payment. |
| **Basic on July 2025 payslip** (More options) | Optional. Your basic salary from that payslip | Blank | If it does not match the table for your grade and notch, a warning appears. |
| **Promotion from / New grade / New notch** (More options) | Optional. The month a promotion starts, and the new grade and notch | No promotion | Moves your salary to the new grade and notch from that month. Increments then continue from the new notch. |

---

## 4. Understanding the results

**Back pay card (headline).** The total gross back pay for July 2025 to December 2026, before tax. The line underneath shows the estimated take-home from that back pay after deductions.

**Monthly cards.**
- *Monthly gross from Jan 2027*: the new gross pay from the first new payslip, with your current gross beneath it.
- *Monthly take-home from Jan 2027*: the estimated net pay from that payslip, with your current take-home beneath it.
- *Extra take-home to June 2029*: an approximate total of extra take-home from July 2025 to June 2029. It combines the back pay instalments, the January 2027 back pay and the monthly difference from January 2027 onwards. Treat it as a rough guide.

**Back pay payments table.**
- *2025/26 (each of 3)*: the back pay for July 2025 to June 2026, paid in three equal instalments. Payment dates are not yet set in the agreement.
- *Jul-Dec 2026 (paid Jan 2027)*: the back pay for July to December 2026, paid with the January 2027 salary.
- *Gross*, *Deductions* and *Take-home* are shown for each payment.

**Extra gross pay per financial year.** The increase in gross pay compared with your current pay for each year (2025/26 to 2028/29), including any Book and ICT payments in that year.

**Annual Book and ICT allowance** (academic staff only). The gross amount each year, the estimated take-home per payment, and the month it is paid.

**Key assumptions** (collapsed). A short list of the main assumptions. The full list is in [section 6](#6-assumptions).

**Warnings.** A yellow box appears if the basic salary you enter on the check line does not match the table for your grade and notch.

---

## 5. How the figures are calculated

### 5.1 Salary tables

Basic salary comes from the **Schedule I** tables of the Return to Work Formula, for each grade, notch and financial year (2024/25 to 2028/29).

- Academic staff: grades **10A to 15A**.
- Administrative staff: grades **5 to 15**.

### 5.2 Monthly gross pay

> **Gross = basic + commuter allowance + house allowance + professorial allowance (if applicable)**

- **Commuter allowance**: KES 18,000 under the agreement. The increase is phased in over three years (or applied in full from July 2025, if you choose that).
- **House allowance**: the amount you enter, unchanged.
- **Professorial allowance** (academic staff, grades 15A and 14A only): KES 7,500 a month for 15A and KES 6,000 a month for 14A.

### 5.3 Deductions on each monthly payslip

| Deduction | Rule |
|---|---|
| **Pension** | The percentage you enter × basic salary (not gross). |
| **Union dues** | 2% of basic salary. |
| **NSSF** (if ticked) | 6% of gross pay, up to KES 108,000. |
| **SHIF** | 2.75% of gross pay. |
| **Housing levy** | 1.5% of gross pay. |
| **PAYE** | Charged on taxable pay, which is gross minus NSSF, pension, SHIF and housing levy. |

**PAYE bands (monthly, 2025 rates)**

| Taxable pay (KES) | Rate |
|---|---|
| Up to 24,000 | 10% |
| 24,001 to 32,333 | 25% |
| 32,334 to 500,000 | 30% |
| 500,001 to 800,000 | 32.5% |
| Above 800,000 | 35% |

A personal relief of **KES 2,400** is deducted from the tax calculated.

> **Net take-home = gross - NSSF - pension - union dues - SHIF - housing levy - PAYE**

### 5.4 Back pay (arrears)

- **July 2025 to June 2026**: the difference between new pay and your current pay, month by month. It is paid in **three equal instalments**. Each instalment is taxed on top of your *current* payslip.
- **July to December 2026**: the same difference for those six months. It is paid with the **January 2027** salary. It is taxed on top of your *new* January 2027 salary.
- **Pension** on back pay is calculated on the basic element only.
- **Union dues** on back pay are 2% of the back pay (clause 12 of the agreement).
- **SHIF and housing levy** on back pay are calculated on the full back pay amount.
- **NSSF** on back pay only adds the amount needed to reach the cap, so NSSF is not charged twice.

### 5.5 Book and ICT allowance (academic staff)

- Paid **once a year** in the month you choose, at the Schedule II amount for your grade (15A: KES 18,500; 14A: 17,500; 13A: 15,000; 12A: 14,000; 11A: 12,000; 10A: 10,000).
- Only **SHIF and housing levy** are deducted, plus PAYE calculated as the extra tax on top of that month's salary. No pension, NSSF or union dues apply.

### 5.6 Extra gross pay per year

For each month, extra gross pay = new gross pay - current gross pay. The totals for each financial year add these up, and include any Book and ICT payments made in that year.

---

## 6. Assumptions

These are the points the agreement does not settle, or where the tool has to make a choice. Please check them with your payroll office.

1. **Current pay stays on your July 2025 payslip until December 2026.** No increments are assumed on the old scale during that period.
2. **Increments** happen in the month you choose each year. The first increment is the next time that month comes round after July 2025. For example, July increments start in July 2026. Notch 12 is the top, so increments stop there.
3. **Commuter allowance** rises in three equal steps from your current amount to KES 18,000, starting July 2025. The *full* option applies KES 18,000 from July 2025 instead.
4. **House allowance** does not change.
5. **Professorial allowance** (academic grades 15A and 14A) starts in July 2025, is paid monthly, and is included in back pay, as the other allowances are under clause 10(c).
6. **Book and ICT allowance** (academic staff) starts in July 2025, is paid once a year in the chosen month (July by default), and is the same amount each year.
7. **Promotion** takes effect in the chosen month at the new grade and notch. Increments then continue from the new notch, and the promotion counts in back pay for months before December 2026.
8. **New salaries start in January 2027.** The agreement requires implementation on or before 31 January 2027.
9. **The three instalments** for 2025/26 are equal. Each one is taxed against your current payslip.
10. **Tax** uses the 2025 monthly bands and the KES 2,400 relief. Pension is deducted before tax without a cap.
11. **NSSF** is 6% of gross up to KES 108,000. The tool does not apply the lower earnings limit, so figures for lower salaries may differ slightly.
12. **Extra take-home to June 2029** is approximate. It does not include Book and ICT payments unless they fall within that period.

---

## 7. Not included

The following are **not** in the totals:

- **Annual leave allowance** (shown on the page for reference only);
- **Passage and baggage allowance** and **professional allowance** (not in the tables used);
- **Higher rates** a university already pays, which stay in place until the next review (Transition clause i);
- **SACCO, loan** and other voluntary deductions;
- **Items still under negotiation**, due by 28 February 2027 (clause C);
- **Car loan and mortgage scheme** rules, which the Government must publish by 31 December 2026.

---

## 8. Worked example

These figures reproduce the sample payslips in the agreement pack. The inputs are: **academic staff, grade 10A, notch 12, commuter KES 15,000, house KES 27,800, pension 10%, NSSF deducted, increment in July.**

| Check | Tool result | Agreement sample |
|---|---|---|
| October 2026 take-home (old scale) | KES 88,625 | KES 88,625 |
| October 2026 PAYE | KES 27,941 | KES 27,941 |
| 2025/26 instalment: PAYE | KES 16,265 | KES 16,265 |
| 2025/26 instalment: take-home | KES 36,696 | KES 36,696 |
| January 2027 take-home | KES 100,778 | KES 100,778 |
| July-Dec 2026 back pay: take-home | KES 72,677 | KES 72,677 |
| 2025/26 back pay (gross) | KES 188,280 | KES 188,280 |
| July-Dec 2026 back pay (gross) | KES 123,804 | KES 123,804 |

Total back pay before tax is **KES 312,084**. Book and ICT is not part of that figure, because it is shown as a separate annual payment (see section 5.5).

---

## 9. Privacy

- **Nothing you enter is stored or sent anywhere.** All calculations run in your browser.
- **Feedback** is sent only if you choose to send it. The *Send by email* button opens your own email app with the text you typed. If you tick *Include my staff group, grade and notch*, those three details are added. **No pay figures are ever included.**
- The page does not use cookies or tracking.

---

## 10. Sharing and feedback

- **Share** on WhatsApp or Facebook, or **copy the link**, so colleagues can use the tool.
- **Print / Save PDF** produces a printable copy of your results. Keep it private: it contains your pay figures.
- **Feedback** can rate the estimate, report a wrong figure, suggest a feature, or ask a question. Use *Send by email* or *Copy message*.

---

## 11. Known limitations

- **Salary tables were transcribed** from scanned copies of the signed agreement. Please spot-check a few grades and notches against the signed original before relying on them.
- **Payment dates** for the 2025/26 instalments are not yet set in the agreement.
- **PAYE and other rates** may change. The tool uses the 2025 rates.
- **Browser support**: a current version of Chrome, Edge, Firefox or Safari is recommended. The *Copy* buttons need a secure page (https), and may not work when the page is opened from a file on your computer.
- **Results are estimates.** They do not reflect individual circumstances such as unpaid leave, acting allowances, overpayments or recoveries.

---

## 12. Maintenance notes

The file is a single self-contained HTML page with no external libraries.

- **Salary tables:** `KUSU_TABLE` and `UASU_TABLE` (Schedule I). Each row is a notch from 1 to 12, and each column is a financial year from 2024/25 to 2028/29.
- **Allowances:** `KUSU_LEAVE`, `UASU_LEAVE`, `UASU_BOOK` and `UASU_PROF` (Schedule II).
- **Tax bands:** the `tax()` function.
- **Deduction rates:** `payslip()` and `arrearsPay()`.
- **Commuter phasing:** `commuterFor()`.
- **Monthly schedule:** `schedule()`, which covers July 2025 to June 2029.
- **Results:** `compute()` and `render()`.

When the agreement is amended, update the tables, the allowances and the rules together, then update this README and the page's *Key assumptions* list so they match.

---

## 13. Version history

| Version | Notes |
|---|---|
| **1.0** | First public release. UASU and KUSU salary tables; monthly schedule to June 2029; back pay split into instalments; PAYE and statutory deductions; Book and ICT and professorial allowances; promotion and commuter phasing; printable results; share and feedback buttons. |

---

## 14. Licence and contact

Copyright © 2026 Suleiman Gaitho, Garissa University. All rights reserved.

You may use the hosted page to estimate your own pay, and you may link to it and share the link. Copying, hosting elsewhere, modifying, redistributing or creating derivative works requires prior written permission. See [LICENSE](LICENSE) for the full terms.

The software is provided "as is", without warranty of any kind. Figures are unofficial estimates and are not payroll advice. The author is not liable for any loss arising from their use.

**For permission or consultation:** Suleiman Gaitho, Garissa University, suleiman.abdullahi.gaitho@gmail.com

## Files

- `v2/index.html`: the page, including the salary tables, rules and calculation. It works on its own, with no other files.
- `v2/tests.js`: the automated checks.
- `v2/CHANGELOG.md`: the list of changes by version.

## Version 2.1

- Acceptance screen before use, in English and Kiswahili.
- Payslip check: enter gross pay, PAYE and net pay, and see the differences.
- Total deductions field: the loans figure is worked out from it.
- Pension entered as a percentage of basic or in KES.
- Commuter and car allowance as one field.
- Promotion: warning if pay falls, and current and new grade side by side.
- One-page printable HR summary, with an on-screen preview.
- About tab with the products, services, integrations and contact.

See `v2/CHANGELOG.md` for the full list.

## Running the checks

From the `v2` folder, run:

    node tests.js

All checks should pass before a new version is released. See `v2/CHANGELOG.md` for the list of changes.

## About the developer

Suleiman Gaitho is the developer of ERP systems, LMS, Institution Meet and consultancy services.
Email: suleiman.abdullahi.gaitho@gmail.com
