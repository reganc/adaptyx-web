export type CapabilitySection = {
  heading: string;
  items: ReadonlyArray<string>;
};

export type CapabilityDomain = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  sections: ReadonlyArray<CapabilitySection>;
  highlights: ReadonlyArray<string>;
};

export const platformDomains: ReadonlyArray<CapabilityDomain> = [
  {
    slug: "clinical-operational",
    name: "Clinical & Operational Platform",
    tagline: "A complete EHR built for the way care actually happens.",
    summary:
      "Point-of-care documentation, MDS 3.0 with PDPM optimization, integrated eMAR and eTAR, and the specialized programs surveys actually look at — wound, infection, falls, and behavioral health — unified in one cloud-native chart.",
    highlights: [
      "Point-of-care documentation for nursing, therapy, and interdisciplinary teams",
      "Comprehensive MDS 3.0 workflows with built-in validation and PDPM optimization",
      "Integrated eMAR/eTAR with pharmacy connectivity and medication safety controls",
    ],
    sections: [
      {
        heading: "Point-of-care documentation",
        items: [
          "MDS Sections N (meds), O (treatments / therapy minutes), Q (participation) — full Admission, Annual, and SCSA validity",
          "Wound documentation v2 — photo upload with millimeter-grid overlay, length × width × depth, undermining and tunneling, NPUAP/NPIAP staging walkthrough, healing trajectory chart, weekly auto-prompts",
          "Pain map — clickable body diagram for J0100 / PAINAD with site-specific intensity history",
          "PRN effectiveness documentation — required follow-up note 30–60 minutes after every PRN with non-effective dose tagging",
          "Restorative Nursing Programs (RNP) — six standard programs (ROM, ambulation, transfer training, eating/swallowing, dressing/grooming, communication) with daily logs and MDS Section O minutes auto-roll-up",
          "Therapy productivity dashboard — billable units and hours, cap monitoring, KX-modifier tracking",
          "Functional outcome reporting — G-code and GG progression chart per discipline with target attainment",
          "Group therapy scheduler with attendance and per-resident cost allocation",
          "Discharge planning workbench — post-acute placement, equipment list, training checklist, follow-up appointment scheduler",
        ],
      },
      {
        heading: "Clinical safety & specialized programs",
        items: [
          "Sepsis / clinical deterioration early-warning — NEWS2 and qSOFA computed from the latest vitals, auto-page when score crosses threshold",
          "Sleep and bowel/bladder pattern dashboards with automatic abnormal-pattern flags",
          "Falls Prevention program — post-fall huddle workflow, root cause selector, Morse trends, recurrent-faller dashboard",
          "Restraint reduction program — F-605/606 monthly review of every active restraint with alternatives-tried log",
          "Sundowner's and behavioral pattern identification — heat-map of incidents by time of day with intervention effectiveness scoring",
          "Code blue / rapid response tracking with debrief template",
          "Antipsychotic GDR (Gradual Dose Reduction) tracking with §483.45(e) compliance log and auto-renewal alerts",
          "Anticoagulant monitoring — INR trend, auto-alert on out-of-range, dose-adjust workflow",
          "Insulin titration log — basal/bolus charting, sliding-scale entry, hypoglycemia event tracker",
          "Death with dignity pathway — hospice election, comfort orders, mortuary disposition, family notifications, and bereavement follow-up in one workflow",
        ],
      },
      {
        heading: "Memory care",
        items: [
          "Wandering and elopement risk dashboard with unit-census board",
          "Behavioral interventions library with effectiveness scoring",
          "Validation therapy and reminiscence tracking",
          "Specialty-care-unit (SCU) census and staffing ratios",
        ],
      },
      {
        heading: "eMAR / eTAR & medication safety",
        items: [
          "Barcode medication administration (BCMA) — patient wristband and med barcode pre-administration check",
          "Antibiotic stewardship — McGeer and Loeb criteria checker on every culture and order, days-of-therapy dashboard, NHSN antibiotic-use export",
          "Polypharmacy review — Beers Criteria with STOPP/START flags on the active med list, monthly Pharmacist MRR workflow with sign-off",
          "Medication Regimen Review (MRR) workflow — auto-trigger on the quarterly cycle with response tracking",
          "Pharmacist consultation notes — monthly chart review with a recommendations queue",
          "Drug-drug interaction checker at order entry",
          "High-alert medication double-check workflow at administration",
          "Stop-date alerts with auto-renewal request to the prescriber",
          "Stock cabinet inventory with par-level alerts",
          "Controlled substance reconciliation — shift count, two-witness sign-off, discrepancy investigation workflow",
          "Drug return and waste log — DEA-compliant with witness",
        ],
      },
      {
        heading: "Census, admissions & move-in",
        items: [
          "Inquiry / lead pipeline — phone, email, and web inquiries flow through tour, application, and admit with a conversion funnel",
          "Tour scheduling with auto-confirmation and follow-up",
          "Pre-admission screening — Section 1 and PASRR L1 in one form",
          "Hospital referral inbox integration — pull discharge summaries from connected hospital ADTs with instant resident-create",
          "Bed reservation and hold calendar with payer-tagged hold types",
          "Welcome-packet generator with merge fields",
          "Move-in / move-out checklist with department tasks (housekeeping, dietary, pharmacy, MDS coordinator)",
          "Discharge readiness scorecard — composite of meds reconciled, equipment ordered, ride confirmed, follow-up scheduled",
        ],
      },
      {
        heading: "Dining & nutrition",
        items: [
          "Menu management — recipes, nutrient analysis, therapeutic-diet matrix, weekly cycle",
          "Food allergy and preference tracking with cross-meal warnings",
          "Hydration program compliance — fluid intake by shift with auto-flag at-risk residents",
          "Restorative dining — mealtime adaptive-equipment and assistance-level program",
          "MNA-SF (Mini Nutritional Assessment) with monthly trending",
          "Calorie count workflow for at-risk residents",
          "Weight-loss alert — automatic >5% in 30 days or >10% in 6 months trigger to the dietitian queue (per F-692)",
          "Dietary consult queue",
        ],
      },
      {
        heading: "Operations & facilities",
        items: [
          "Work order ticketing with assets, parts, and preventive maintenance",
          "Preventive maintenance calendar for beds, hoyer lifts, oxygen concentrators",
          "Calibration schedule for vital-sign devices",
          "Refrigerator, freezer, and med-room temp logs with overflow alerts",
          "Generator and boiler test log",
          "Disaster prep and drill log (fire, evacuation, active shooter, infectious disease)",
          "Pest control, linen, and housekeeping inventory",
          "Vehicle maintenance log for facility transport",
          "Trip scheduling — appointment trips, driver assignment, vehicle calendar",
          "Cost tracking per trip and payer (Medicaid NEMT)",
          "Resident transportation history",
        ],
      },
    ],
  },

  {
    slug: "revenue-cycle",
    name: "Revenue Cycle Management",
    tagline: "From eligibility to write-off, one integrated billing engine.",
    summary:
      "A fully integrated billing engine spanning the entire claims lifecycle — automated submission, real-time eligibility, ERA processing, denial workflow, and the patient-responsibility, AR, and cost-report tooling that closes the financial loop.",
    highlights: [
      "Automated claim generation, scrubbing, and submission (837I)",
      "Real-time eligibility verification and ERA processing",
      "Denial management, appeals, and patient responsibility tracking",
    ],
    sections: [
      {
        heading: "Claims lifecycle",
        items: [
          "Automated claim generation, scrubbing, and submission (837I)",
          "Real-time eligibility verification with payer integration",
          "ERA / 835 remittance processing with auto-posting",
          "Co-pay and deductible collection at admission",
          "State Medicaid eligibility automatic verification",
          "Clearinghouse integration with submission tracking",
        ],
      },
      {
        heading: "Denials, appeals & collections",
        items: [
          "Denial management with appeals workflow",
          "Patient responsibility tracking with statements",
          "Aging detail with collection workflow — 30/60/90/120/120+ buckets, per-payer aging, auto-letter",
          "Bad-debt write-off workflow with approval",
          "Refund workflow with audit trail",
          "Underpayment and overpayment recovery dashboard",
        ],
      },
      {
        heading: "Resident financial",
        items: [
          "Self-pay statement automation with payment plans and collections workflow",
          "Online payments on the family portal and statement portal",
          "Sliding-scale calculator for community-care residents",
          "Resident trust fund — dual signature on withdrawals over threshold, monthly statement to family",
        ],
      },
      {
        heading: "Financial dashboards & cost reporting",
        items: [
          "Financial dashboards and accounts receivable visibility",
          "Skilled days by payer for revenue forecasting",
          "Cost-report assistance — Medicare cost-report data prep",
          "Medicare bad-debt log (Form CMS-339 prep)",
          "Length of stay analytics by payer, referral source, and DRG",
        ],
      },
    ],
  },

  {
    slug: "interoperability",
    name: "Interoperability at the Core",
    tagline: "An open healthcare platform built on the modern standards.",
    summary:
      "CareCore is designed as an open platform — native HL7 v2 and FHIR R4, SMART on FHIR, C-CDA exchange, plus the pharmacy, lab, registry, and clearinghouse connectivity that makes a modern post-acute facility actually interoperable.",
    highlights: [
      "Native HL7 v2 and FHIR R4 support",
      "SMART on FHIR integration framework",
      "C-CDA export and external data exchange",
    ],
    sections: [
      {
        heading: "Standards-based exchange",
        items: [
          "HL7 v2 messaging — ADT, ORM, ORU, MDM, SIU",
          "FHIR R4 API for clinical data exchange",
          "SMART on FHIR app launch and integration framework",
          "C-CDA structured-data export and inbound import — auto-create med orders, problems, and allergies on receipt",
          "Provider Directory API per the CMS Interop Rule",
          "DIRECT secure messaging",
        ],
      },
      {
        heading: "Pharmacy & e-prescribing",
        items: [
          "Surescripts integration for e-prescribing",
          "Long-term-care pharmacy connectivity for med dispense and reconciliation",
          "Formulary check at order entry",
          "Refill request automation",
        ],
      },
      {
        heading: "Lab, imaging & registries",
        items: [
          "Lab order outbound HL7 ORM with results inbound (ORU)",
          "Radiology PACS integration for image viewing",
          "Immunization registry submission (state IIS)",
          "State PDMP integration for opioid checks at order entry",
          "HIE connectivity for cross-facility patient lookup",
        ],
      },
      {
        heading: "Hospital ADT & referral",
        items: [
          "Hospital ADT subscriptions — auto-import discharges into the referral pipeline",
          "Cross-setting transfer with full clinical packet",
          "Bed-availability publishing back to acute partners",
          "Care-coordination messaging with hospital case managers",
        ],
      },
      {
        heading: "Third-party connectivity",
        items: [
          "Stripe and Square for payments",
          "QuickBooks and Sage Intacct GL export",
          "ADP and Paychex payroll export from PBJ",
          "DocuSign for legal forms",
          "Twilio for SMS",
          "SendGrid and Postmark for transactional email",
          "MS Teams and Slack notification channels",
          "Calendar sync (Google, Outlook) for staff schedules",
          "Uber Health and LogistiCare for resident transportation booking",
        ],
      },
    ],
  },

  {
    slug: "connected-experience",
    name: "Connected Experience",
    tagline: "Engagement across staff, residents, and families.",
    summary:
      "Mobile-first nurse workflows with offline capability, a family portal with real-time updates, a resident kiosk for activities and requests, and the secure messaging and alert routing that holds it all together across shifts.",
    highlights: [
      "Mobile-first nurse workflows with offline capability",
      "Family portal with real-time updates and communication",
      "Resident kiosk for activities, messaging, and requests",
    ],
    sections: [
      {
        heading: "Mobile staff workflows",
        items: [
          "Staff iOS app — eMAR, eTAR, vital entry, notes with offline mode and barcode scanning",
          "Staff Android app — same surface, native shell",
          "Push notifications for staff (iOS and Android)",
          "SMS staff alerts for critical events (call-bell escalation, code blue, sepsis alert)",
        ],
      },
      {
        heading: "Family portal & engagement",
        items: [
          "Family iOS app",
          "Family Android app",
          "Resident About Me / life-story — biography, photos, music preferences, important people, surfaced to staff at handoff",
          "Memory book — multi-section life-story builder (childhood, career, family, milestones)",
          "Birthday calendar with auto-card generation",
          "Photo of the day — staff posts, all linked family see",
          "Care diary — narrative auto-generated from clinical events, family-readable",
          "Video calls — Zoom and FaceTime scheduling with click-to-join from the family portal",
          "Spending-money requests by family with trust-fund integration",
          "Wish lists and care-package coordination",
          "Religious services calendar with attendance",
          "Family newsletter generator with merge fields",
          "Email digest for family — daily or weekly summary of resident activity",
          "Translation services for family messages",
        ],
      },
      {
        heading: "Resident kiosk",
        items: [
          "Meal pre-ordering",
          "Resident photo upload so the picker shows real faces",
          "Resident-to-resident messaging for social connection",
          "Activity ratings — post-activity 1–5 stars and comment",
          "Religious and spiritual practice scheduling",
          "Library catalog for in-house book exchange",
        ],
      },
      {
        heading: "Secure messaging & alerts",
        items: [
          "Daily 24-hour handoff report — oncoming-shift summary auto-generated from changes",
          "Charge nurse rounding checklist",
          "Stand-up huddle template (clinical or operational)",
          "Staff secure-messaging — intra-facility chat with PHI permitted in-message",
          "Alert routing engine — escalation chains (RN → charge nurse → DON → on-call MD), per-event policy",
        ],
      },
      {
        heading: "Telehealth",
        items: [
          "Virtual physician visits — Zoom and Doximity scheduling with visit notes",
          "Tele-mental health specialty queue",
          "Remote Patient Monitoring (RPM) — pull vitals from wearables into the chart",
          "Tele-rehab session scheduling with post-session note",
        ],
      },
    ],
  },

  {
    slug: "workforce-compliance-quality",
    name: "Workforce, Compliance & Quality",
    tagline: "Survey-ready every day, scheduled around real staffing reality.",
    summary:
      "Self-scheduling, PBJ submission, license and competency tracking, the full QAPI lifecycle, F-tag library, resident rights, and the audit logging and access controls that keep the building survey-ready every day.",
    highlights: [
      "Staff scheduling, time tracking, and PBJ reporting",
      "QAPI, incident tracking, and survey management",
      "Built-in audit logging and HIPAA-compliant access controls",
    ],
    sections: [
      {
        heading: "Scheduling & PBJ",
        items: [
          "Self-scheduling — staff bid for open shifts in a posted period",
          "Open-shift marketplace with mobile push-out and one-tap claim",
          "Mandatory-overtime tracking with state cap alerts (CA, NY, more)",
          "PTO accrual and request workflow with manager approval",
          "Time tracking integrated with scheduling",
          "CMS PBJ submission — automated four times yearly with QA preview",
        ],
      },
      {
        heading: "Credentials & lifecycle",
        items: [
          "Staff competency tracking — initial and annual competencies, due alerts, in-service catalog",
          "License and credential renewal tracking — auto-pull from state nursing board APIs where available",
          "Staff vaccination compliance dashboard (flu, COVID, TB)",
          "Background-check expiration tracker",
          "Onboarding checklist with department sign-offs",
          "Performance review cycle — annual, 90-day, peer feedback, signature",
          "Exit interview with categorization for turnover analytics",
          "Pulse-survey weekly engagement check",
        ],
      },
      {
        heading: "Education & training",
        items: [
          "In-service training catalog with CEU tracking",
          "Video training library with completion certificates",
          "Quiz and competency builder",
          "State-required training matrix",
        ],
      },
      {
        heading: "Quality & QAPI",
        items: [
          "CMS Five-Star Quality Measure dashboard — all 17 long-stay and short-stay QMs computed live, with peer-percentile chart",
          "Five-Star prediction simulator — model the staffing, QM, and inspection star changes from resolving specific high-risk items",
          "PIP (Performance Improvement Project) full lifecycle — charter, root-cause tools (fishbone, 5-whys), measurement plan, PDSA cycles, sustain phase",
          "Sentinel event and RCA tracker with action-item ownership and sign-off",
          "Mock-survey workflow — F-tag checklist, observation tracker, exit conference template",
          "Resident satisfaction surveys — ad hoc and CMS CoreQ with trending",
        ],
      },
      {
        heading: "Survey readiness",
        items: [
          "F-tag library — every F-tag with citation history per facility",
          "Plan of Correction (POC) tracker — task assignment, due dates, evidence upload",
          "State-specific reporting — CA Title 22 SOC, NY DOH 415, FL 59A-4 incident reporting, and more",
          "HIPAA breach tracking with 60-day notification workflow",
          "Vendor compliance — BAA expirations and COI tracking",
          "Affirmative action / EEO-1 reporting",
        ],
      },
      {
        heading: "Resident rights",
        items: [
          "Bill of Rights acknowledgment — annual review with signature",
          "SOGI intake (sexual orientation, gender identity) per CMS interpretive guidance",
          "Personal property inventory — photo, value, and lost/found log",
          "Photo consent management — opt-in tiers (clinical only, family portal, marketing)",
          "Roommate compatibility screen",
          "Pets-in-residency tracking with vaccination status",
        ],
      },
      {
        heading: "Identity, audit & security",
        items: [
          "SAML / SSO (Okta, Azure AD, Google Workspace)",
          "SCIM provisioning for staff onboarding and offboarding",
          "MFA for all logins (TOTP and WebAuthn)",
          "IP allowlist per facility",
          "Session timeout configurable per role",
          "Password policy with breach-list check",
          "PHI access audit dashboard",
          "Sentry error tracking with PHI scrubbing",
          "External uptime monitoring",
          "Off-host backups",
          "SOC 2 evidence collection automation",
          "Multi-region failover",
        ],
      },
    ],
  },

  {
    slug: "intelligent-care",
    name: "Intelligent, Data-Driven Care",
    tagline: "Live numbers, peer benchmarks, and an assistant that knows your data.",
    summary:
      "Real-time dashboards across census, quality measures, and finance; automated workflows and compliance alerts; and an AI assistant that supports staff in plain English, reducing administrative burden across every shift.",
    highlights: [
      "Real-time dashboards for census, quality measures, and financial performance",
      "Automated workflows and compliance alerts",
      "AI-powered assistant to support staff and reduce administrative burden",
    ],
    sections: [
      {
        heading: "Real-time dashboards",
        items: [
          "Census forecast",
          "Length of stay analytics by payer, referral source, and DRG",
          "Readmission rate tracking with 30-day lookback",
          "Skilled days by payer for revenue forecasting",
          "Falls, infection, pressure-ulcer, and behavior trend dashboards with peer benchmarks",
          "Antibiotic days-of-therapy and antipsychotic prevalence dashboards",
          "Survey deficiency analysis comparing your facility to state and national",
          "Five-Star peer-percentile dashboard",
        ],
      },
      {
        heading: "Custom reporting & data export",
        items: [
          "Custom report builder — drag-and-drop columns, save, schedule, email",
          "Data warehouse export — nightly Parquet/CSV to S3 for BI",
          "Sleep and bowel/bladder pattern dashboards with abnormal-pattern flags",
          "Scheduled regulatory exports (NHSN, MDS submission, PBJ)",
        ],
      },
      {
        heading: "AI assistant",
        items: [
          "AI Assistant — in-app, query the chart in plain English",
          "Voice queries — ask the assistant aloud and get answers grounded in your data",
          "AI-assisted nursing note generation from structured triggers",
          "Voice-to-text dictation for nursing notes",
          "Documentation completeness checker — surface missing required fields per role and shift",
          "Smart triage of family messages — auto-route to social work, nursing, or dietary",
        ],
      },
      {
        heading: "Predictive scoring & automation",
        items: [
          "Predictive fall-risk scoring",
          "Predictive 30-day readmission scoring",
          "PDPM optimization suggestions",
          "MDS auto-coding from narrative notes",
          "Anomaly detection in vitals — z-score against resident baseline, page on outlier",
          "Activity recommendation engine — match residents to upcoming activities by Section F preferences and cognition",
          "Automated compliance alerts — survey-window overdue, missed assessments, expiring credentials",
        ],
      },
    ],
  },
];

export const getDomainBySlug = (
  slug: string,
): CapabilityDomain | undefined =>
  platformDomains.find((d) => d.slug === slug);

export const getDomainSlugs = (): ReadonlyArray<string> =>
  platformDomains.map((d) => d.slug);

export const totalFeatureCount = (): number =>
  platformDomains.reduce(
    (acc, d) =>
      acc + d.sections.reduce((sub, s) => sub + s.items.length, 0),
    0,
  );

export const domainFeatureCount = (d: CapabilityDomain): number =>
  d.sections.reduce((sub, s) => sub + s.items.length, 0);
