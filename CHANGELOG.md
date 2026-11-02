# Changelog

## Unreleased

- Fixed: a grade outside the current scale (for example, grade 9 under UASU) caused an error when the notch list was updated. The notch list now leaves itself unchanged in that case.
- Fixed: the pension warning appeared only on the results page. It now appears straight away in Step 2.
- Fixed: "Forget my answers" cleared the house allowance and did not restore the suggested amount.

- House allowance is suggested for each grade when the grade or staff group changes. The suggested amounts are editable. Only amounts that are clearly legible in the source are included (KUSU 5, 7, 8, 9, 10, 12, 13; UASU 10A, 11A, 13A). Other grades are blank, to be entered from the payslip.
- Assumption: the suggested amounts come from the 2021-2025 KUSU schedule and published reports of current UASU allowances. Confirm them against the 2025-2029 schedule.

- Usage is tracked with GitHub repository traffic (Insights, then Traffic). The page itself has no tracking code.

- Tests (now 46 checks): the review date, the pension check, the missing-field messages and the printed-summary language.
- Printed summary: the pension is marked as limited to 0% to 20% when the entered value was capped. The university review date is listed when a university rate is used.
- Step 2: a note asks the user to check the review date with their payroll office.
- Unticking the university rate clears the review date.

- University commuter rate: an optional review date. The university rate applies until that month, then the agreement rate applies. Without a date, it applies for the whole period.
- Printed summary: a "How the back pay is worked out" section, with the figures for each payment.
- Pension warning: a message when the percentage is outside 0 to 20, showing the value used.
- The printed-summary language is saved on its own and is kept between visits.

- Results: the monthly section states the commuter source (university rate, or the agreement rate). The printed inputs mark the university rate.
- Clear messages name the missing fields (grade, notch, commuter, house allowance, pension). The Next button stops on the step with the gap.
- Keyboard shortcut: Ctrl+P (Cmd+P on a Mac) builds the summary and prints it.

- Step 2: "My university pays a higher commuter rate". When ticked, the amount entered is used for every year, as the agreement allows universities already paying more to keep their rate until the next review. Assumption: the higher rate lasts for the whole period.
- Results: a "Printed summary language" choice (English or Kiswahili), separate from the interface language.

- About tab: each product and service card has a benefit line, written from the concerns universities raise about systems (budget and completion, integration, exam data, security and continuity). These are commitments to confirm before publishing.
- Step 1: optional "Your university" field. It appears in the printed summary header and is stored on the device only. It does not change any figure.

- Print HR summary button on Step 3 and in the results. Save as PDF opens the print dialog, where you choose "Save as PDF".
- On-screen preview of the printed summary in the results.
- "Forget my answers" button on Step 1.
- Reminder to check the new grade and notch when a promotion is entered.
- About tab: a one-line tagline for each product, and Institution Meet and the customised ERP listed first.

- About tab: Odel and Institution Meet descriptions updated, with the Odel modules listed.
- Printing now gives a one-page HR summary (A4), with the inputs and results.
- Language switch on the acceptance screen (English and Kiswahili).
- Promotion: the current grade and the new grade are shown side by side, by month.
- About tab: new Security and data protection card (hosting, access, Data Protection Act 2019, data ownership, and the calculator storing nothing on a server). Statements to be confirmed before publishing.
- About tab: "Request a demo" button on each product card. It opens an email with the product name filled in.
- About tab: the LMS card now lists its modules and says it is customisable for each institution.
- About tab: new Integrations card (eCitizen, bank APIs, M-Pesa, QMIS, KUCCPS, HELB, HEF), marked as subject to provider approval.
- About tab: the College systems card now describes systems for TVET and private colleges (CBET, KUCCPS placement, TVETA compliance), with its modules listed.
- About tab: the ERP card now describes the customised institution ERP and its integrated LMS, with its modules listed.
- About tab: consultancy now lists ICT systems audit, systems administration, software development and systems advice.

## 2.1 (2 November 2026)

- Notch 12 note: the results say that no increments apply after July 2025.
- Worked example for back pay, collapsed under the results.
- Terms explained now appear with the results.
- The yearly gross and take-home table is collapsed by default, to make the results shorter on a phone.
- "Start from my payslip" button on step 1, which goes to the payslip fields.
- The acceptance screen's assumptions are collapsed.
- The "extra take-home to June 2029" label now says what it includes, and that loans do not change it.
- The printed copy shows the version and the rules used.
- The page is one self-contained file again. It works without any other files.

## 2.0 (2 November 2026)

- Added a must-accept screen before use. It states that the tool is not endorsed by UASU, KUSU, IPUCCF, FKE, the Ministry of Education or any university, and that results are estimates.
- Added English and Kiswahili.
- Commuter allowance and car allowance are one field.
- Pension can be entered as a percentage of basic or in KES per month.
- Typing the July 2025 basic sets the notch.
- Added a total deductions field. The loans figure is calculated from it and shown as you type.
- Added other allowances (for example hardship) and checks of gross pay, PAYE and net pay against the payslip.
- Added a status line at the top of the results.
- Added how-to-fill panels, a list of what not to enter, and a mismatch checklist.
- Added a warning when a promotion lowers pay in some months.
- Added a yearly gross and take-home table to 2028/29.
- Added saved payslip checks (last three, on the device) and a print summary.
- Added designations for UASU grades 10A to 15A.
- Added a "Report a wrong figure" link.

## 1.0

- First public release: UASU and KUSU salary tables, back pay in instalments, PAYE and statutory deductions, Book and ICT and professorial allowances, printable results, share and feedback buttons.

## Known open items

- Phone number on the About tab: set once in index.html (CONTACT_PHONE).

- Row-by-row check of the salary tables against the signed agreement.
- Browser and screen-reader testing.
- Kiswahili review.
- Payroll confirmation of the assumptions.
- KUSU grade designations.
