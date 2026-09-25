# Transplant Day Timeline — Design

## Purpose

A single-page microsite telling the story of a living-donor kidney transplant (Fri 5 Dec 2025, Guy's Hospital), from ward admission to returning to the ward. It shows what the hospital record actually says, next to a plain-English version. It may be shared publicly.

Source: EPIC record export, pp. 502–560: case tracking events, the anaesthesia record and drug chart, the op note and benching note, and the recovery nursing notes.

## Privacy rules (non-negotiable)

- Remove: surname, NHS number, MRN, DOB, case/log numbers, device serial/lot numbers.
- Staff appear **by role only** (e.g. "Consultant transplant surgeon", "Consultant anaesthetist", "Scrub nurse", "Renal registrar").
- Remove the pre-op progress note paragraph that names friends/family.
- Keep: the hospital name, dates, clinical content.
- Allergies are left out (not needed for the story).

## Voice

- Left column: note text **verbatim** (abbreviations kept, names swapped for roles in [brackets]).
- Right column: third person, clinical-plain ("Patient taken to the anaesthetic room."), short, calm. Hardly any adjectives. At most 2 sentences per event.
- Glossary definitions: one sentence, no further detail (e.g. *"Propofol is a fast-acting intravenous medication used to induce and maintain general anaesthesia."*).

## Layout

- **Desktop:** vertical timeline with a time spine down the middle. Note excerpt on the left (monospace, "printout" styling), explanation on the right.
- **Mobile (<720px):** a single column. Time, then note, then explanation, stacked per event.
- **Glossary terms** inside either column get a dotted underline. Tap/click/focus opens a small popover with the one-sentence definition. Popovers use the native `popover` attribute with `<button>` triggers, so they work with the keyboard and on touch. No hover-only behaviour.
- **Milestones (★)** render as full-width bands that break the two-column grid. **Reperfusion** gets the strongest treatment, as the emotional peak of the page.
- **Sticky header** showing the current event's clock time plus elapsed time since anaesthesia start (14:40), updated with `IntersectionObserver`.
- Light/dark via `prefers-color-scheme`.

## Timeline content

Fri 5 Dec 2025 unless stated. ★ = milestone band.

| # | Time | Note excerpt (verbatim, source) | Explanation gist | Glossary terms |
|---|---|---|---|---|
| 1 ★ | Thu 4 Dec 14:26 | "In Facility" (case tracking) | Patient admitted to Richard Bright Ward the day before | — |
| 2 | 11:09 | "Mallampati: II … Anticipated Airway: difficult intubation not expected … Anaesthesia Type: General TIVA … Post-op pain plan: Routine Post-op Analgesia and PCA" (pre-op evaluation) + "ASA Grade: III" (op note) | Anaesthetist assesses the patient's airway; plan and risks explained | Mallampati, TIVA, PCA, ASA |
| 3 ★ | 13:38 | "Start of cold ischaemia time in donor … Preservation solution: HTK … Static cold storage" (benching note) | The donor kidney is removed, flushed and put on ice. The clock starts. | Cold ischaemia time, HTK |
| 4 | 14:39–14:40 | "In Anaesthetic Room" + sign-in: "Is there risk of high blood loss? Yes … Are there adequate fluids available to replenish high blood loss? Yes" + "Recipient blood type: O Rh D POSITIVE … Expected donor blood type: O … compatible? Yes" | Safety checklist, blood group match confirmed | WHO checklist, ABO |
| 5 | 14:41 | "Peripheral IV … Size: 20 G … Location: Hand … Attempts: 1" | First cannula | Cannula |
| 6 ★ | 14:44 | "Induction" + drug chart: "(TCI) propofol (1%) … Target 4 micrograms/mL … Marsh" (14:53), "(TCI) remifentanil … 5 nanograms/mL … Minto" (14:49), "rocuronium 50 mg" (14:54), "plasmalyte-148 New Bag" (14:49) | Going to sleep | TCI, propofol, remifentanil, Marsh/Minto, rocuronium, Plasma-Lyte |
| 7 | 14:56 | "Direct Laryngoscope Blade Type: Macintosh … Size: 3 … Cormack-Lehane Classification: Grade I - full view of glottis … ETT Size (mm): 8.0 … ETT securement (cm): 21 … Placement Verified by: capnometry" | Breathing tube in, first attempt | ETT, Macintosh blade, Cormack-Lehane, capnometry |
| 8 ★ | 15:00 | "Organ in theatre" + "Visual and verbal verification performed by primary surgeon: Yes … Correct donor organ has been identified for the correct recipient: Yes" | The kidney arrives in theatre and is checked against the patient | — |
| 9 | 15:00–15:30 | "Peripheral IV … 16 G … Wrist" · "Arterial Line … Site: Radial artery … Indication: continuous BP monitoring and blood sampling" · "Central Access … Patient Position: Trendelenburg … ultrasound-guided … Dialysis line insertion? Yes … Lumen number: three … Side: Right … Site: internal jugular vein … 12 Fr" | More lines: a large drip, a wrist artery line, a neck line | Arterial line, central line, internal jugular, Trendelenburg, Fr (French) |
| 10 | 15:43–15:44 | "basiliximab 20 mg", "methylPREDNISolone … 1 g", "amikacin 420 mg", "metronidazole 500 mg", "teicoplanin 400 mg" | Drugs to stop the patient's immune system attacking the kidney, plus antibiotics | Basiliximab, methylprednisolone, amikacin, metronidazole, teicoplanin, immunosuppression |
| 11 | 15:45–15:50 | "Body: Supine … Head: Aligned" + time-out: "Has the surgeon reviewed the critical steps? Yes … Correct laterality? Yes" | Positioned; final team check | Supine, time-out |
| 12 ★ | 15:57 | "Case Start" + "Incision: Right Rutherford Morison Incision … Extraperitoneal space developed. EI Vessels mobilised. Rectus - preserved" + "Paint: ChloraPrep" | First incision | Rutherford Morison, extraperitoneal, external iliac vessels, rectus |
| 13 | 16:16 | "fentanyl 200 micrograms", "rocuronium 40 mg", "labetalol 10 mg" | Top-ups and blood-pressure control | Fentanyl, labetalol |
| 14 | 17:14 | "Kidney removed from ice" + "Number of renal arteries: Three … Polar artery: Upper pole - sacrificed … Lower polar artery spatulated to 4mm diameter" | Kidney prepared; its vessels stitched to the patient's | Benching, polar artery, spatulated, anastomosis, Prolene |
| 15 ★★ | 17:45 | "Kidney Reperfusion" + "Reperfusion: Good. Lower half a little slow but pinked up with papaverine" + "CIT: 3 hours, 36 minutes · WIT: 31 minutes" | Clamps off, blood flows into the new kidney. **Peak moment.** | Reperfusion, papaverine, CIT, WIT |
| 16 ★ | (no time recorded) | "Urine produced on table: Yes" | It works straight away | — |
| 17 | ~18:00–18:30 | "Bladder identified with aid of methylene blue · Ureteric anastomosis over 7Fr stent + antireflux procedure" + "Technique: Ureteroneocystostomy" · fentanyl 200 micrograms (18:23) | Ureter joined to the bladder | Methylene blue, ureteroneocystostomy, ureteric stent, anti-reflux |
| 18 | 18:58 | "ondansetron 8 mg", "paracetamol infusion 1g" + "Washout · Haemostasis · Drain to RIF" | Anti-sickness and pain relief; closing up begins | Ondansetron, paracetamol, haemostasis, drain, RIF |
| 19 | ~19:00 | "Closure: 1 loop PDS to fascia · 2/0 Vicryl for fat · 3/0 monocryl to skin · Dermabond" + "PD Catheter removal … Dissection down to deep cuff - excised … Catheter removed" | Stitched up; dialysis tube removed through the old scar | PDS/Vicryl/Monocryl, Dermabond, PD catheter |
| 20 | 19:18–19:40 | "sugammadex 200 mg" + TCI "Stopped" 19:39 + "propofol … 2,270 mg", "remifentanil … 3,520 micrograms" + "plasmalyte-148" ×4 L | Waking up | Sugammadex |
| 21 | 19:46 | Sign-out: "Are counts correct? Yes … Additional information: Concern for recovery: blood pressure" | Handover checklist | Sign-out |
| 22 ★ | 19:59 | "Extubation/Airway Removed" + "Estimated blood loss (EBL) (mL): 100" + "Ipsilateral foot perfusion: Warm, well perfused" | Breathing tube out, operation over (4h 2m of surgery) | Extubation, EBL |
| 23 | 20:03 | "In Recovery" + op-note plan: "Ultrasound scan: Immediately in recovery … Catheter out: 5 days · Stent out: 3 weeks" | In recovery | — |
| 24 | 21:36 | "CXR and renal ultrasound was done. Bloods sent to the laboratory." | Checks on the neck line and on blood flow to the kidney | CXR, renal ultrasound |
| 25 | 23:00 | "Renal Medical SPR came and review the patient … CXR has been done and reviewed. Central line can be used. She is happy for the patient to go back to the ward." | Cleared to go back | SpR |
| 26 ★ | 23:31 | "Out of Recovery" | Back on Richard Bright Ward, 8h 52m after entering the anaesthetic room | — |

**Hidden detail ("Full note"):** some events carry extra verbatim lines from the op note and benching note. They sit in a native `<details>` element, closed by default, and can contain glossary terms.

| Event | Detail lines (verbatim) |
|---|---|
| #10 | Crossmatch status: Negative · Antibody incompatible transplant: No · Immunosuppression protocol: Low risk |
| #12 | Findings: Standard anatomy · Iliac artery: Normal · Iliac vein: Normal · Inferior epigastric vessels: Ligated and divided · Spermatic cord / round ligament: Preserved |
| #14 | Quality of cold perfusion: Good · Number of renal veins: One · Number of ureters: 1 · Renal parenchyma: Normal · Retrieval damage: No |
| #15 | Renal artery 1: Renal artery to EIA, continuous 6-0 Prolene · Renal artery 2: Renal artery to EIA, continuous 6-0 Prolene · Renal vein 1: Renal vein to EIV, continuous 5-0 Prolene · Haemostasis: Complete · Any anastomoses redone? No |
| #19 | Perinephric drain: 20Fr Robinson · Ipsilateral femoral pulse: Strong · Distal pulses present |
| #23 | Drain out when: <30 ml · Catheter out: 5 days · Stent out: 3 weeks · Post-operative heparin to be given? Not required |

Extra glossary terms: crossmatch, antibody incompatible, parenchyma, spermatic cord, perinephric, femoral pulse, heparin.

**Source discrepancy (footnote on #15):** the organ checklist labels 17:45 "Anastomosis start", but the anaesthetic log labels it "Kidney Reperfusion". The WIT of 31 min (17:14 off ice → 17:45) matches reperfusion, so the page uses reperfusion.

**Header strip:** procedure "Kidney Transplant – Living Donor" · theatre GH MT 04 · a team list by role (1 consultant surgeon, 3 assisting surgeons, 1 consultant anaesthetist, 1 anaesthetic practitioner, scrub and circulating nurses).

## Build

- `site/index.html` holds the markup, CSS and render script. `site/content.js` holds `EVENTS` (the table above) and `GLOSSARY` (`{term: definition}`), about 50 entries.
- Each event: `{time, date?, at, label, source, note, explain, milestone: 0|1|2, detail?: string[], footnote?}`. `at` is minutes since midnight on 5 Dec (null if unknown or on another day). The sticky clock uses it. Glossary terms are marked in `note`/`explain` text as `[[term]]` or `[[display text|term]]`. The renderer turns them into popover buttons. An unknown term throws at load, which catches typos.
- No framework, no build step, no dependencies.
- Publish as a private Artifact. It stays private until I choose to share it.

## Claude Design handoff

This comes **after** `content.js` is written and reviewed, so the words are locked. We then take `content.js` plus a bare-bones `index.html` to Claude Design for visual direction (type, colour, milestone treatment, spine styling). Its output comes back as CSS/markup changes to `index.html` only. The prompt is written at that point.

## Verification

- Open in the browser pane at desktop and mobile widths, plus dark mode.
- Every `[[term]]` resolves. Popovers open with click and keyboard.
- Grep the output for the surname, NHS number, MRN, DOB and every staff surname from the record: zero hits.
