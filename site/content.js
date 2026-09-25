// All words on the page. [[term]] or [[shown text|term]] links to GLOSSARY (case-insensitive).
// `at` = minutes since midnight Fri 5 Dec 2025 (null = unknown); check.mjs uses it for ordering.
globalThis.CONTENT = {
  events: [
    {
      time: '11:09', at: 669, milestone: 0,
      label: 'Anaesthetic assessment', source: 'Anaesthesia preprocedure evaluation · Op note',
      note: `[[Mallampati]]: II
Anticipated Airway: difficult intubation not expected
Anaesthesia Type: General [[TIVA]]
Post-op pain plan: Routine Post-op Analgesia and [[PCA]]
[[ASA Grade]]: III`,
      explain: `The consultant anaesthetist checks the patient's airway and agrees the plan: [[TIVA]], with a [[PCA]] pump for pain afterwards. Risks are discussed and consent is given.`,
      detail: [
        `Anaesthetic risks discussed but not limited to: postoperative nausea and vomiting, sore throat, lip / dental damage, dysaesthesia on injection, respiratory complications, severe allergy (anaphylaxis) and death`,
      ],
    },
    {
      time: '13:38', at: 818, milestone: 1,
      label: 'Kidney on ice', source: 'Benching note',
      note: `Start of [[cold ischaemia time]] in donor: 5/12/2025 13:38
Preservation solution: [[HTK]]
Organ preservation technique's: [[Static cold storage]]`,
      explain: `The donor's kidney is removed in the same theatre where the transplant will take place, flushed with preservation fluid and packed in ice. From now, a clock runs until it has a blood supply again.`,
    },
    {
      time: '14:39', at: 879, milestone: 0,
      label: 'Anaesthetic room', source: 'WHO checklist · ABO verification',
      note: `In Anaesthetic Room: 14:39
Timeout type: [[Sign-in]]
Is there risk of high blood loss? Yes
Are there adequate fluids available to replenish high blood loss? Yes
Recipient [[blood type|ABO]]: O Rh D POSITIVE
Expected donor blood type and subtype (if applicable): O
Expected donor and recipient are blood type compatible? Yes`,
      explain: `Patient taken to the anaesthetic room. The team runs the [[WHO checklist]] sign-in and confirms donor and recipient blood groups are compatible.`,
    },
    {
      time: '14:41', at: 881, milestone: 0,
      label: 'First cannula', source: 'Anaesthesia procedure note',
      note: `[[Peripheral IV]]
Size: [[20 G|Gauge]]
Location: Hand
Laterality: Posterior and left
Attempts: 1`,
      explain: `A cannula goes into the back of the left hand, first time.`,
    },
    {
      time: '14:44', at: 884, milestone: 1,
      label: 'Induction', source: 'Anaesthesia record',
      note: `Induction: 14:44
[[plasmalyte-148|Plasma-Lyte 148]] · New Bag 14:49
([[TCI]]) [[remifentanil]] 2 mg in sodium chloride 0.9% 40 mL
Target 5 nanograms/mL · [[Minto|Minto model]]/Plasma · New Bag 14:49
(TCI) [[propofol]] (1%) 500 mg/50 mL
Target 4 micrograms/mL · [[Marsh|Marsh model]]/Plasma · New Bag 14:53
[[rocuronium]] 50 mg · Given 14:54`,
      explain: `The anaesthetist gives [[remifentanil]] by hand first (the patient remembers asking about it as it went in), then computer-controlled pumps take over with remifentanil and [[propofol]]. This is [[TIVA]]: IV drugs instead of gases keep the patient asleep.`,
    },
    {
      time: '14:56', at: 896, milestone: 0,
      label: 'Breathing tube', source: 'Airway note',
      note: `[[Preoxygenated|Pre-oxygenation]]: Yes
Direct Laryngoscope Blade Type: [[Macintosh|Macintosh blade]]
Direct Laryngoscope Blade Size: 3
Direct Laryngoscopy [[Cormack-Lehane]] Classification: Grade I - full view of glottis
[[ETT]] Size (mm): 8.0
ETT securement (cm): 21
Placement Verified by: [[capnometry]]
Number of Attempts at Approach: 1`,
      explain: `A breathing tube is placed in the windpipe on the first attempt, with a clear view of the vocal cords. A ventilator now breathes for the patient.`,
    },
    {
      time: '15:00', at: 900, milestone: 0,
      label: 'Kidney verified', source: 'ABO organ verification',
      note: `Organ in theatre: 15:00
Primary surgeon scrubbed in: Yes
Visual and verbal verification performed by primary surgeon: Yes
[[Match run]] verified: Yes
Correct donor organ has been identified for the correct recipient: Yes`,
      explain: `The surgeon checks the donor kidney against the patient's records before the operation goes ahead.`,
    },
    {
      time: '15:00–15:30', at: 900, milestone: 0,
      label: 'Lines', source: 'Anaesthesia procedure notes',
      note: `15:00 Peripheral IV · Size: [[16 G|Gauge]] · Location: Wrist
15:15 [[Arterial Line]] · Site: Radial artery
Indication: continuous BP monitoring and blood sampling
15:30 Central Access · Patient Position: [[Trendelenburg]] · ultrasound-guided
[[Dialysis line]] insertion?: Yes
Lumen number: three · Side: Right · Site: [[internal jugular vein]]
Dialysis line size: [[12 Fr|French]]`,
      explain: `While asleep, the patient gets a larger drip, a wrist-artery line for beat-by-beat blood pressure, and a line in the neck vein. The neck line can give drugs, and dialysis if the new kidney is slow to start.`,
    },
    {
      time: '15:43', at: 943, milestone: 0,
      label: 'Immunosuppression and antibiotics', source: 'Anaesthesia record',
      note: `[[basiliximab]] 20 mg in sodium chloride 0.9% 50 mL IV infusion · 15:43
[[methylPREDNISolone|Methylprednisolone]] sodium succinate 1 g in sodium chloride 0.9% 100 mL IV infusion · 15:43
[[amikacin]] 420 mg in sodium chloride 0.9% 100 mL IV infusion · 15:43
[[metronidazole]] infusion 500 mg · 15:43
[[teicoplanin]] injection 400 mg · 15:44`,
      explain: `[[Immunosuppression]] starts: basiliximab and a large steroid dose damp down the immune system so it doesn't attack the new kidney. Three antibiotics guard against infection.`,
      detail: [
        `[[Crossmatch]] status: Negative`,
        `[[Antibody incompatible]] transplant: No`,
        `Immunosuppression protocol: Low risk`,
      ],
    },
    {
      time: '15:45–15:50', at: 945, milestone: 0,
      label: 'Into theatre', source: 'Positioning · WHO checklist',
      note: `In Room: 15:42
Body: [[Supine]] · Mattress Gel, Sheet Draw
Head: Aligned · Pillow
Time: 15:45
Timeout type: [[Time-out]] · 15:50
Consents verified? Yes
Has the surgeon reviewed the critical steps? Yes
Correct [[laterality]]? Yes`,
      explain: `Patient moved into theatre and laid flat on the back. The whole team pauses for a final check before the operation starts.`,
    },
    {
      time: '15:57', at: 957, milestone: 1,
      label: 'First incision', source: 'Op note',
      note: `Case Start: 15:57
Paint: [[ChloraPrep]] stick (2% w/v chlorhexidine gluconate + 70% v/v isopropyl alcohol)
Incision: Right [[Rutherford Morison Incision]]
[[Extraperitoneal]] space developed.
[[EI Vessels|External iliac vessels]] mobilised
[[Rectus]] - preserved`,
      explain: `The skin is painted with antiseptic and the surgeon makes a curved cut in the lower right abdomen. The large blood vessels to the right leg are freed up, ready for the new kidney.`,
      detail: [
        `Findings: Standard anatomy`,
        `Iliac artery: Normal`,
        `Iliac vein: Normal`,
        `[[Inferior epigastric vessels]]: Ligated and divided`,
        `[[Spermatic cord]] / round ligament: Preserved`,
      ],
    },
    {
      time: '16:16', at: 976, milestone: 0,
      label: 'Top-ups', source: 'Anaesthesia record',
      note: `[[fentanyl]] 200 micrograms · Given 16:16
rocuronium 40 mg · Given 16:16
[[labetalol]] 10 mg · Given 16:16`,
      explain: `More pain relief and muscle relaxant, plus [[labetalol]] to bring blood pressure down.`,
    },
    {
      time: '17:14', at: 1034, milestone: 0,
      label: 'Off the ice', source: 'Benching note · Op note',
      note: `Kidney removed from ice: 17:14
Number of [[renal arteries|Renal artery]]: Three
Arterial patch: Not present
[[Polar artery]]: Upper pole - [[sacrificed]]
Lower polar artery [[spatulated]] to 4mm diameter
Implantation:
[[RV to EIV]] - 5/0 [[prolene]]
[[RA to EIA]] - 6/0 prolene x2`,
      explain: `Prepared on the [[back table|Benching]], the kidney has three arteries rather than the usual one: the tiny one to its top tip is tied off, and the one to its lower tip is trimmed wider so it can be joined. The kidney's vein and two arteries are then stitched onto the patient's leg vessels.`,
      detail: [
        `Quality of cold perfusion: Good`,
        `Number of renal veins: One`,
        `Number of ureters: 1`,
        `Renal [[parenchyma]]: Normal`,
        `Retrieval damage: No`,
      ],
    },
    {
      time: '17:45', at: 1065, milestone: 2,
      label: 'Reperfusion', source: 'Anaesthesia record · Op note',
      note: `Kidney Reperfusion: 17:45
[[Reperfusion]]: Good. Lower half a little slow but pinked up with [[papaverine]]
[[CIT|Cold ischaemia time]]: 3 hours, 36 minutes
[[WIT|Warm ischaemia time]]: 31 minutes`,
      explain: `The clamps come off and the patient's blood flows into the new kidney, turning it pink. The lower half was slower, so the surgeon used [[papaverine]] to open up its vessels.`,
      detail: [
        `Renal artery 1: Renal artery to EIA, continuous 6-0 Prolene`,
        `Renal artery 2: Renal artery to EIA, continuous 6-0 Prolene`,
        `Renal vein 1: Renal vein to EIV, continuous 5-0 Prolene`,
        `[[Haemostasis]]: Complete`,
        `Any anastomoses redone? No`,
      ],
    },
    {
      time: 'After reperfusion', at: null, milestone: 1,
      label: 'Urine', source: 'Op note',
      note: `Urine produced on table: Yes`,
      explain: `The new kidney starts making urine before the operation is even finished.`,
    },
    {
      time: '~18:00', at: 1080, milestone: 0,
      label: 'Ureter to bladder', source: 'Op note · Anaesthesia record',
      note: `Bladder identified with aid of [[methylene blue]]
Ureteric [[anastomosis]] over 7Fr stent + [[antireflux procedure]]
Technique: [[Ureteroneocystostomy]], continuous 4.0 PDS
fentanyl 200 micrograms · Given 18:23`,
      explain: `The kidney's drainage tube (ureter) is stitched into the bladder over a thin temporary [[stent|Ureteric stent]]. A tunnel under the bladder lining stops urine flowing back up.`,
    },
    {
      time: '18:58', at: 1138, milestone: 0,
      label: 'Washout', source: 'Anaesthesia record · Op note',
      note: `[[ondansetron]] 8 mg · Given 18:58
[[paracetamol]] infusion (1g/100mL) 1g · Given 18:58
Washout
[[Haemostasis]]
[[Drain]] to [[RIF]]`,
      explain: `Anti-sickness medicine and paracetamol are given ahead of waking. The area is washed out, checked for bleeding, and a drain is left beside the kidney.`,
    },
    {
      time: '~19:05', at: 1145, milestone: 0,
      label: 'Closing', source: 'Op note',
      note: `Closure:
1 loop [[PDS]] to [[fascia]]
2/0 [[Vicryl]] for fat
3/0 [[monocryl]] to skin
[[Dermabond]]
[[PD Catheter]] removal
Incision: Over old scar beneath umbilicus
Dissection down to deep [[cuff]] - excised
Catheter removed`,
      explain: `The wound is closed in layers with dissolving stitches and skin glue. The peritoneal dialysis tube, no longer needed, is removed through a small cut under the belly button.`,
      detail: [
        `[[Perinephric]] drain: 20Fr Robinson`,
        `Ipsilateral [[femoral pulse]]: Strong`,
        `Distal pulses present`,
      ],
    },
    {
      time: '19:18', at: 1158, milestone: 0,
      label: 'Waking up', source: 'Anaesthesia record',
      note: `[[sugammadex]] 200 mg · Given 19:18
(TCI) propofol · Stopped 19:39 · 2,270 mg total
(TCI) remifentanil · Stopped 19:39 · 3,520 micrograms total
plasmalyte-148 · 1,000 mL bags at 15:51, 16:31, 17:43, 18:22`,
      explain: `[[Sugammadex]] reverses the muscle relaxant, then the anaesthetic pumps are switched off. Four one-litre bags of drip fluid were put up over the operation.`,
    },
    {
      time: '19:46', at: 1186, milestone: 0,
      label: 'Sign-out', source: 'WHO checklist',
      note: `Timeout type: [[Sign-out]]
Is documentation verified? Yes
Are [[counts]] correct? Yes
Patient ID band on? Yes
Additional information: Concern for recovery: blood pressure`,
      explain: `Final checklist: every swab, needle and instrument accounted for. The team flags blood pressure for recovery staff to watch.`,
    },
    {
      time: '19:59', at: 1199, milestone: 1,
      label: 'Tube out', source: 'Anaesthesia record · Op note',
      note: `Procedure Finish: 19:59
[[Extubation]]/Airway Removed: 19:59
Estimated blood loss ([[EBL]]) (mL): 100
Ipsilateral foot perfusion: Warm, well perfused`,
      explain: `The breathing tube comes out and the patient breathes unaided. Surgery took 4 hours 2 minutes, with about 100 mL of blood lost.`,
    },
    {
      time: '20:03', at: 1203, milestone: 0,
      label: 'Recovery', source: 'Case tracking · Op note',
      note: `Out of Room: 20:01
In Recovery: 20:03
Ultrasound scan: Immediately in recovery / ITU
Post-op destination: Ward`,
      explain: `Patient taken to recovery to wake up fully under close watch.`,
      detail: [
        `Drain out when: <30 ml`,
        `Catheter out: 5 days`,
        `Stent out: 3 weeks`,
        `Post-operative [[heparin]] to be given? Not required`,
      ],
    },
    {
      time: '21:36', at: 1296, milestone: 0,
      label: 'Checks', source: 'Perioperative nursing note',
      note: `[[CXR]] and [[renal ultrasound]] was done. Bloods sent to the laboratory.`,
      explain: `A chest X-ray checks the neck line's position; an ultrasound checks blood is flowing through the new kidney.`,
    },
    {
      time: '23:00', at: 1380, milestone: 0,
      label: 'Cleared for the ward', source: 'Perioperative nursing note',
      note: `Renal Medical [[SPR|SpR]] came and review the patient. In Recovery.
CXR has been done and reviewed. Central line can be used.
She is happy for the patient to go back to the ward.`,
      explain: `The renal registrar reviews the patient and the X-ray, and clears the return to the ward.`,
    },
    {
      time: '23:31', at: 1411, milestone: 1,
      label: 'Back on the ward', source: 'Case tracking',
      note: `Recovery Care Complete: 23:10
Out of Recovery: 23:31`,
      explain: `Patient returns to Richard Bright Ward, just under nine hours after entering the anaesthetic room.`,
    },
  ],

  glossary: {
    'Mallampati': 'A score of how much of the back of the throat is visible with the mouth open, used to predict how easy the breathing tube will be to place; II means a good view.',
    'TIVA': 'Total intravenous anaesthesia: using IV drugs instead of gases to keep the patient asleep.',
    'PCA': 'Patient-controlled analgesia: a pump with a button the patient presses to give themselves a small, safe dose of painkiller.',
    'ASA Grade': 'A 1–6 fitness grade for anaesthesia; III means a serious but stable long-term illness, here kidney failure.',
    'Cold ischaemia time': 'The time a donor kidney spends chilled on ice without a blood supply.',
    'HTK': 'A cold preservation fluid flushed through the donor kidney to protect it while it has no blood supply.',
    'Static cold storage': 'Keeping the kidney in preservation fluid on ice, rather than on a perfusion machine.',
    'WHO checklist': 'The World Health Organization surgical safety checklist, run at three points: sign-in, time-out and sign-out.',
    'Sign-in': 'The first WHO checklist step, done before the patient is put to sleep.',
    'Time-out': 'The WHO checklist pause just before the first incision, when the whole team confirms the patient, procedure and plan.',
    'Sign-out': 'The final WHO checklist step before the patient leaves theatre.',
    'ABO': 'The ABO blood group system; donor and recipient blood groups must be compatible for a transplant.',
    'Peripheral IV': 'A cannula: a thin plastic tube placed in a vein in the hand or arm to give fluids and drugs.',
    'Gauge': 'Cannula size; the smaller the number, the wider the tube, so 16 G is larger than 20 G.',
    'TCI': 'Target-controlled infusion: a computer-driven pump that adjusts its rate to hold a set drug level in the blood.',
    'Propofol': 'Propofol is a fast-acting intravenous medication used to induce and maintain general anaesthesia.',
    'Marsh model': 'The formula the pump uses to work out propofol doses from the patient’s weight.',
    'Remifentanil': 'A very strong, very short-acting opioid painkiller, usually given as a continuous infusion; it wears off within minutes of stopping.',
    'Minto model': 'The formula the pump uses to work out remifentanil doses from the patient’s age, weight and height.',
    'Rocuronium': 'A muscle relaxant that temporarily stops muscles moving, so the breathing tube can go in and the surgeon can work.',
    'Plasma-Lyte 148': 'A balanced salt-water drip that keeps blood volume up, helping the new kidney get a good blood supply.',
    'Pre-oxygenation': 'Breathing pure oxygen through a mask before going to sleep, to build a safety reserve.',
    'Macintosh blade': 'The curved blade used to lift the tongue and see the vocal cords.',
    'Cormack-Lehane': 'A 1–4 grade of how well the vocal cords can be seen; Grade I is a full, easy view.',
    'ETT': 'Endotracheal tube: the breathing tube passed through the mouth into the windpipe.',
    'Capnometry': 'Measuring carbon dioxide in exhaled breath, which confirms the tube is in the windpipe.',
    'Match run': 'The transplant record linking this donor kidney to this recipient.',
    'Arterial line': 'A thin tube in the wrist artery that shows blood pressure beat by beat and allows blood samples without new needles.',
    'Trendelenburg': 'Tilting the patient head-down, which fills the neck veins and makes a line easier and safer to insert.',
    'Dialysis line': 'A wide tube in a large vein that can connect to a dialysis machine and also be used to give drugs.',
    'Internal jugular vein': 'A large vein in the side of the neck.',
    'French': 'Tube width: 3 Fr is 1 mm, so 12 Fr is 4 mm across.',
    'Basiliximab': 'An antibody drug that blocks the signal immune cells use to multiply, lowering the risk of early rejection.',
    'Methylprednisolone': 'A strong steroid given as one large dose to damp down the immune system as the new kidney goes in.',
    'Amikacin': 'An antibiotic, given here to prevent infection.',
    'Metronidazole': 'An antibiotic that targets bacteria living without oxygen, such as gut bacteria.',
    'Teicoplanin': 'An antibiotic that targets skin bacteria such as staphylococci.',
    'Immunosuppression': 'Medicines that damp down the immune system so it doesn’t reject the new kidney.',
    'Crossmatch': 'A lab test mixing recipient blood with donor cells; negative means no antibodies ready to attack the kidney.',
    'Antibody incompatible': 'A transplant where the recipient already has antibodies against the donor; “No” means this wasn’t one.',
    'Supine': 'Lying flat on the back.',
    'Laterality': 'Which side of the body, checked so the correct side is operated on.',
    'ChloraPrep': 'An antiseptic skin paint of chlorhexidine and alcohol that kills bacteria on the skin.',
    'Rutherford Morison incision': 'A curved cut in the lower abdomen that lets the surgeon reach the pelvic blood vessels.',
    'Extraperitoneal': 'Staying outside the peritoneum, the lining that holds the bowel, so the gut isn’t disturbed.',
    'External iliac vessels': 'The large artery and vein carrying blood to and from the leg; the new kidney is joined to these.',
    'Rectus': 'The “six-pack” muscle down the front of the abdomen, left uncut here.',
    'Inferior epigastric vessels': 'Small vessels in the abdominal wall, tied and cut to make room.',
    'Spermatic cord': 'The cord carrying blood vessels and the tube to the testicle, left intact.',
    'Fentanyl': 'A strong opioid painkiller that lasts longer than remifentanil, given to cover pain on waking.',
    'Labetalol': 'A drug that lowers blood pressure.',
    'Renal artery': 'The artery carrying blood into the kidney; most kidneys have one, this one had three.',
    'Polar artery': 'An extra artery supplying just the top or bottom tip (pole) of the kidney.',
    'Sacrificed': 'Tied off rather than reconnected, usually because the vessel is too small to join safely.',
    'Spatulated': 'Cut open lengthways to widen the end, so the join is bigger and less likely to narrow.',
    'Benching': 'Preparing the donor kidney on a cold “back table” before it goes in.',
    'RV to EIV': 'Renal vein to external iliac vein: the kidney’s vein sewn onto the large vein from the right leg.',
    'RA to EIA': 'Renal artery to external iliac artery: the kidney’s arteries sewn onto the large artery to the right leg.',
    'Prolene': 'A fine permanent stitch used for blood vessels; the bigger the number (6/0 vs 5/0), the finer the thread.',
    'Parenchyma': 'The working tissue of the kidney.',
    'Reperfusion': 'The moment the clamps come off and blood flows into the new kidney.',
    'Papaverine': 'A drug that relaxes and widens blood vessels, applied directly to improve flow.',
    'Warm ischaemia time': 'Here, the time from the kidney leaving the ice to blood flowing through it, while it is being stitched in.',
    'Haemostasis': 'Stopping all bleeding before closing.',
    'Methylene blue': 'A blue dye put into the bladder so it is easy to find and open.',
    'Anastomosis': 'A surgical join between two tubes, such as blood vessels, or the ureter and bladder.',
    'Ureteric stent': 'A thin, soft temporary tube inside the ureter that protects the new join while it heals; removed after a few weeks.',
    'Antireflux procedure': 'Tunnelling the ureter under the bladder lining so urine can’t flow back up to the kidney.',
    'Ureteroneocystostomy': 'Joining the new kidney’s ureter to the bladder.',
    'Ondansetron': 'An anti-sickness medicine.',
    'Paracetamol': 'A painkiller, given here into a vein.',
    'Drain': 'A soft tube left beside the kidney to let fluid out; removed once little comes out.',
    'RIF': 'Right iliac fossa: the lower right part of the abdomen, where the new kidney sits.',
    'PDS': 'A strong, slowly dissolving stitch used for the tough layer of the abdominal wall.',
    'Fascia': 'The tough sheet of tissue holding the abdominal wall together.',
    'Vicryl': 'A dissolving stitch used for the fat layer.',
    'Monocryl': 'A fine dissolving stitch placed just under the skin, so there are no stitches to remove.',
    'Dermabond': 'Skin glue that seals the wound.',
    'PD catheter': 'The peritoneal dialysis tube in the abdomen, used for dialysis before the transplant.',
    'Cuff': 'A small fabric collar on the dialysis tube that tissue grows into to hold it in place, so it has to be cut free.',
    'Perinephric': 'Around the kidney.',
    'Femoral pulse': 'The pulse in the groin; a strong one shows the leg’s blood supply is fine after the join.',
    'Sugammadex': 'A drug that quickly reverses rocuronium so the muscles work again.',
    'Counts': 'Swabs, needles and instruments counted to make sure nothing is left inside.',
    'Extubation': 'Removing the breathing tube.',
    'EBL': 'Estimated blood loss.',
    'CXR': 'Chest X-ray, here checking the neck line’s position.',
    'Renal ultrasound': 'A scan checking blood is flowing through the new kidney.',
    'SpR': 'Specialty registrar: a senior doctor in training.',
    'Heparin': 'A blood thinner; not needed here.',
  },
};
