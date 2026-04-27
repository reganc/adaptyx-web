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
    slug: "clinical-care",
    name: "Clinical Care",
    tagline: "Bedside depth that actually moves survey numbers.",
    summary:
      "Where regulatory exposure, clinical risk, and shift-by-shift adherence converge. Built around the assessments and workflows that decide your tags and your residents' outcomes.",
    highlights: [
      "Wound documentation v2 — millimeter grid + healing trajectory",
      "Sepsis early-warning (NEWS2 / qSOFA) with auto-page",
      "MDS Sections N · O · Q with full Admission/Annual/SCSA validity",
    ],
    sections: [
      {
        heading: "Survey-impact essentials",
        items: [
          "MDS Sections N (meds), O (treatments / therapy minutes), Q (participation) — full Admission, Annual, and SCSA validity",
          "Wound documentation v2 — photo upload with millimeter-grid overlay, length × width × depth, undermining and tunneling, NPUAP/NPIAP staging walkthrough, healing trajectory chart, weekly auto-prompts",
          "Pain map — clickable body diagram for J0100 / PAINAD with site-specific intensity history",
          "PRN effectiveness documentation — required follow-up note 30–60 minutes after every PRN with non-effective dose tagging",
        ],
      },
      {
        heading: "Early warning & safety",
        items: [
          "Sepsis / clinical deterioration early-warning — NEWS2 and qSOFA computed from the latest vitals, auto-page when score crosses threshold",
          "Sleep and bowel/bladder pattern dashboards with automatic abnormal-pattern flags",
          "Falls Prevention program — post-fall huddle workflow, root cause selector, Morse trends, recurrent-faller dashboard",
          "Restraint reduction program — F-605/606 monthly review of every active restraint with alternatives-tried log",
          "Sundowner's and behavioral pattern identification — heat-map of incidents by time of day with intervention effectiveness scoring",
          "Code blue / rapid response tracking with debrief template",
        ],
      },
      {
        heading: "Specialized care",
        items: [
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
    ],
  },

  {
    slug: "pharmacy-medications",
    name: "Pharmacy & Medications",
    tagline: "Stewardship and safety at every administration.",
    summary:
      "From order entry to administration to monthly review — the layer that keeps medications safe, defensible, and efficient across shifts.",
    highlights: [
      "Beers + STOPP/START flags on every med list",
      "McGeer + Loeb antibiotic stewardship with NHSN export",
      "Barcode medication administration (BCMA)",
    ],
    sections: [
      {
        heading: "Antimicrobial stewardship",
        items: [
          "Antibiotic stewardship — McGeer and Loeb criteria checker on every culture and order, days-of-therapy dashboard, NHSN antibiotic-use export",
        ],
      },
      {
        heading: "Medication safety",
        items: [
          "Polypharmacy review — Beers Criteria with STOPP/START flags on the active med list, monthly Pharmacist MRR workflow with sign-off",
          "Medication Regimen Review (MRR) workflow — auto-trigger on the quarterly cycle with response tracking",
          "Pharmacist consultation notes — monthly chart review with a recommendations queue",
          "Drug-drug interaction checker at order entry",
          "High-alert medication double-check workflow at administration",
          "Stop-date alerts with auto-renewal request to the prescriber",
        ],
      },
      {
        heading: "Inventory & controlled substances",
        items: [
          "Stock cabinet inventory with par-level alerts",
          "Controlled substance reconciliation — shift count, two-witness sign-off, discrepancy investigation workflow",
          "Drug return and waste log — DEA-compliant with witness",
          "Barcode medication administration (BCMA) — patient wristband and med barcode pre-administration check",
        ],
      },
    ],
  },

  {
    slug: "therapy-restorative",
    name: "Therapy & Restorative",
    tagline: "Section O minutes that reconcile themselves.",
    summary:
      "Restorative nursing programs, therapy productivity, and discharge readiness — connected so minutes flow up to the MDS and outcomes flow back to the care plan.",
    highlights: [
      "6 Restorative Nursing Programs with auto-roll-up to MDS Section O",
      "GG functional outcome reporting per discipline",
      "Discharge planning workbench",
    ],
    sections: [
      {
        heading: "Restorative Nursing",
        items: [
          "Restorative Nursing Programs (RNP) — six standard programs (ROM, ambulation, transfer training, eating/swallowing, dressing/grooming, communication) with daily logs and MDS Section O minutes auto-roll-up",
        ],
      },
      {
        heading: "Productivity & outcomes",
        items: [
          "Therapy productivity dashboard — billable units and hours, cap monitoring, KX-modifier tracking",
          "Functional outcome reporting — G-code and GG progression chart per discipline with target attainment",
          "Group therapy scheduler with attendance and per-resident cost allocation",
        ],
      },
      {
        heading: "Discharge",
        items: [
          "Discharge planning workbench — post-acute placement, equipment list, training checklist, follow-up appointment scheduler",
        ],
      },
    ],
  },

  {
    slug: "quality-qapi",
    name: "Quality & QAPI",
    tagline: "Move the stars before the stars get reported.",
    summary:
      "All seventeen long-stay and short-stay Quality Measures computed live, with the simulator and improvement workflow to act on them before next quarter's submission.",
    highlights: [
      "All 17 long-stay and short-stay QMs computed live",
      "Five-Star prediction simulator",
      "Full PIP lifecycle — charter through sustain",
    ],
    sections: [
      {
        heading: "Five-Star",
        items: [
          "CMS Five-Star Quality Measure dashboard — all 17 long-stay and short-stay QMs computed live, with peer-percentile chart",
          "Five-Star prediction simulator — model the staffing, QM, and inspection star changes from resolving specific high-risk items",
        ],
      },
      {
        heading: "Improvement programs",
        items: [
          "PIP (Performance Improvement Project) full lifecycle — charter, root-cause tools (fishbone, 5-whys), measurement plan, PDSA cycles, sustain phase",
          "Sentinel event and RCA tracker with action-item ownership and sign-off",
          "Mock-survey workflow — F-tag checklist, observation tracker, exit conference template",
          "Resident satisfaction surveys — ad hoc and CMS CoreQ with trending",
        ],
      },
    ],
  },

  {
    slug: "compliance",
    name: "Compliance & Rights",
    tagline: "Survey-ready every day, not just survey week.",
    summary:
      "Per-tag history, state-specific reports, breach workflows, and the resident-rights infrastructure that quietly de-risks every chart and every audit.",
    highlights: [
      "F-tag library with per-facility citation history",
      "State-specific incident reporting (CA, NY, FL, more)",
      "Photo consent management with opt-in tiers",
    ],
    sections: [
      {
        heading: "Survey readiness",
        items: [
          "F-tag library — every F-tag with citation history per facility",
          "Plan of Correction (POC) tracker — task assignment, due dates, evidence upload",
          "State-specific reporting — CA Title 22 SOC, NY DOH 415, FL 59A-4 incident reporting, and more",
          "HIPAA breach tracking with 60-day notification workflow",
          "Vendor compliance — BAA expirations and COI tracking",
          "Affirmative action / EEO-1 reporting",
          "CMS PBJ submission — automated four times yearly with QA preview",
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
    ],
  },

  {
    slug: "census-admissions",
    name: "Census & Admissions",
    tagline: "From phone call to first shift, one funnel.",
    summary:
      "The pipeline that converts inquiries into residents — and the move-in choreography that gets them comfortable on day one.",
    highlights: [
      "Lead pipeline with full conversion funnel",
      "Hospital ADT inbox → instant resident-create",
      "Move-in checklist routed across departments",
    ],
    sections: [
      {
        heading: "Lead pipeline",
        items: [
          "Inquiry / lead pipeline — phone, email, and web inquiries flow through tour, application, and admit with a conversion funnel",
          "Tour scheduling with auto-confirmation and follow-up",
          "Pre-admission screening — Section 1 and PASRR L1 in one form",
          "Hospital referral inbox integration — pull discharge summaries from connected hospital ADTs with instant resident-create",
        ],
      },
      {
        heading: "Move-in flow",
        items: [
          "Bed reservation and hold calendar with payer-tagged hold types",
          "Welcome-packet generator with merge fields",
          "Move-in / move-out checklist with department tasks (housekeeping, dietary, pharmacy, MDS coordinator)",
          "Discharge readiness scorecard — composite of meds reconciled, equipment ordered, ride confirmed, follow-up scheduled",
        ],
      },
    ],
  },

  {
    slug: "workforce",
    name: "Workforce",
    tagline: "Self-scheduling, credentials, and the lifecycle in between.",
    summary:
      "The people layer — bidding for shifts, tracking competencies, surfacing the data that decides whether a unit gets through the next shift.",
    highlights: [
      "Self-scheduling and open-shift marketplace",
      "License & competency expirations with auto-pull",
      "Pulse engagement surveys",
    ],
    sections: [
      {
        heading: "Scheduling",
        items: [
          "Self-scheduling — staff bid for open shifts in a posted period",
          "Open-shift marketplace with mobile push-out and one-tap claim",
          "Mandatory-overtime tracking with state cap alerts (CA, NY, more)",
          "PTO accrual and request workflow with manager approval",
        ],
      },
      {
        heading: "Credentials & competency",
        items: [
          "Staff competency tracking — initial and annual competencies, due alerts, in-service catalog",
          "License and credential renewal tracking — auto-pull from state nursing board APIs where available",
          "Staff vaccination compliance dashboard (flu, COVID, TB)",
          "Background-check expiration tracker",
        ],
      },
      {
        heading: "Lifecycle",
        items: [
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
    ],
  },

  {
    slug: "family-communication",
    name: "Family & Communication",
    tagline: "Where families feel seen and shifts hand off cleanly.",
    summary:
      "Two halves of the same problem — the family experience that retains residents, and the staff communication backbone that retains nurses.",
    highlights: [
      "Care diary auto-narrated from clinical events",
      "Secure intra-facility messaging with PHI permitted",
      "Alert routing engine with escalation chains",
    ],
    sections: [
      {
        heading: "Family experience",
        items: [
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
        ],
      },
      {
        heading: "Communication & alerts",
        items: [
          "Daily 24-hour handoff report — oncoming-shift summary auto-generated from changes",
          "Charge nurse rounding checklist",
          "Stand-up huddle template (clinical or operational)",
          "Staff secure-messaging — intra-facility chat with PHI permitted in-message",
          "Push notifications for staff (iOS and Android)",
          "SMS staff alerts for critical events (call-bell escalation, code blue, sepsis alert)",
          "Email digest for family — daily or weekly summary of resident activity",
          "Alert routing engine — escalation chains (RN → charge nurse → DON → on-call MD), per-event policy",
          "Translation services for family messages",
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
    slug: "resident-experience",
    name: "Resident Experience",
    tagline: "What residents touch, taste, and choose for themselves.",
    summary:
      "The resident-facing surface — kiosk picks, dining choices, the small autonomies that decide whether a unit feels like a home.",
    highlights: [
      "Resident kiosk with meal pre-ordering",
      "Therapeutic-diet matrix with cross-meal allergen warnings",
      "Hydration program with at-risk auto-flagging",
    ],
    sections: [
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
    ],
  },

  {
    slug: "operations-facilities",
    name: "Operations & Facilities",
    tagline: "Boilers, beds, vans, and the logs your surveyor will ask for.",
    summary:
      "The unglamorous infrastructure that keeps the building open — preventive maintenance, drill logs, transportation, and temperature monitoring with the audit trail intact.",
    highlights: [
      "Work orders, PMs, and asset tracking",
      "Refrigerator / freezer / med-room temp logs",
      "Disaster prep and drill log",
    ],
    sections: [
      {
        heading: "Facilities & maintenance",
        items: [
          "Work order ticketing with assets, parts, and preventive maintenance",
          "Preventive maintenance calendar for beds, hoyer lifts, oxygen concentrators",
          "Calibration schedule for vital-sign devices",
          "Refrigerator, freezer, and med-room temp logs with overflow alerts",
          "Generator and boiler test log",
          "Disaster prep and drill log (fire, evacuation, active shooter, infectious disease)",
          "Pest control, linen, and housekeeping inventory",
          "Vehicle maintenance log for facility transport",
        ],
      },
      {
        heading: "Transportation",
        items: [
          "Trip scheduling — appointment trips, driver assignment, vehicle calendar",
          "Cost tracking per trip and payer (Medicaid NEMT)",
          "Resident transportation history",
        ],
      },
    ],
  },

  {
    slug: "reporting-ai",
    name: "Reporting & AI",
    tagline: "Live numbers, peer benchmarks, and an assistant that knows your data.",
    summary:
      "Drag-and-drop reporting, peer-benchmarked dashboards, and an AI layer that closes the gap between what's happening on this unit and what to do about it.",
    highlights: [
      "Custom drag-and-drop report builder",
      "AI Assistant with voice queries",
      "Predictive fall-risk and 30-day readmission scoring",
    ],
    sections: [
      {
        heading: "Dashboards & analytics",
        items: [
          "Custom report builder — drag-and-drop columns, save, schedule, email",
          "Data warehouse export — nightly Parquet/CSV to S3 for BI",
          "Length of stay analytics by payer, referral source, and DRG",
          "Readmission rate tracking with 30-day lookback",
          "Skilled days by payer for revenue forecasting",
          "Falls, infection, pressure-ulcer, and behavior trend dashboards with peer benchmarks",
          "Antibiotic days-of-therapy and antipsychotic prevalence dashboards",
          "Survey deficiency analysis comparing your facility to state and national",
          "Census forecast",
        ],
      },
      {
        heading: "AI assistance",
        items: [
          "AI Assistant — in-app, query the chart in plain English",
          "Voice queries — ask the assistant aloud and get answers grounded in your data",
          "AI-assisted nursing note generation from structured triggers",
          "Predictive fall-risk scoring",
          "Predictive 30-day readmission scoring",
          "PDPM optimization suggestions",
          "MDS auto-coding from narrative notes",
          "Documentation completeness checker — surface missing required fields per role and shift",
          "Voice-to-text dictation for nursing notes",
          "Smart triage of family messages — auto-route to social work, nursing, or dietary",
          "Anomaly detection in vitals — z-score against resident baseline, page on outlier",
          "Activity recommendation engine — match residents to upcoming activities by Section F preferences and cognition",
        ],
      },
    ],
  },

  {
    slug: "platform-security",
    name: "Platform & Security",
    tagline: "The plumbing that lets the rest exist.",
    summary:
      "Mobile, interoperability, identity, financial workflows, and the security posture underneath. Built for HIPAA, SOC 2 Type II, and the integrations operators actually need.",
    highlights: [
      "Native iOS and Android (staff and family)",
      "SAML/SSO, SCIM, MFA, IP allowlist",
      "DIRECT, CCDA inbound, HIE, PDMP, ADT",
    ],
    sections: [
      {
        heading: "Mobile",
        items: [
          "Staff iOS app — eMAR, eTAR, vital entry, notes with offline mode and barcode scanning",
          "Staff Android app — same surface, native shell",
          "Family iOS app",
          "Family Android app",
        ],
      },
      {
        heading: "Interoperability",
        items: [
          "DIRECT secure messaging",
          "CCDA structured-data inbound import — auto-create med orders, problems, and allergies on receipt",
          "Provider Directory API per the CMS Interop Rule",
          "HIE connectivity for cross-facility patient lookup",
          "State Medicaid eligibility automatic verification",
          "State PDMP integration for opioid checks at order entry",
          "Lab-order outbound HL7 ORM",
          "Radiology PACS integration for image viewing",
          "Hospital ADT subscriptions — auto-import discharges into the referral pipeline",
        ],
      },
      {
        heading: "Identity & security",
        items: [
          "SAML / SSO (Okta, Azure AD, Google Workspace)",
          "SCIM provisioning for staff onboarding and offboarding",
          "MFA for all logins (TOTP and WebAuthn)",
          "IP allowlist per facility",
          "Session timeout configurable per role",
          "Password policy with breach-list check",
          "Sentry error tracking with PHI scrubbing",
          "External uptime monitoring",
          "PHI access audit dashboard",
          "Off-host backups",
          "SOC 2 evidence collection automation",
          "Multi-region failover",
        ],
      },
      {
        heading: "Financial & revenue cycle",
        items: [
          "Self-pay statement automation with payment plans and collections workflow",
          "Online payments on the family portal and statement portal",
          "Sliding-scale calculator for community-care residents",
          "Resident trust fund — dual signature on withdrawals over threshold, monthly statement to family",
          "Aging detail with collection workflow — 30/60/90/120/120+ buckets, per-payer aging, auto-letter",
          "Bad-debt write-off workflow with approval",
          "Refund workflow with audit trail",
          "Co-pay and deductible collection at admission",
          "Cost-report assistance — Medicare cost-report data prep",
          "Medicare bad-debt log (Form CMS-339 prep)",
          "Underpayment and overpayment recovery dashboard",
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
          "Surescripts for e-prescribing",
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
