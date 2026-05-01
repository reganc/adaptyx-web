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
      "A complete electronic health record system with advanced clinical tools — point-of-care documentation, MDS 3.0 with PDPM optimization, integrated eMAR/eTAR, and specialized programs for wound care, infection control, falls prevention, and behavioral health, all under one cloud-native platform.",
    highlights: [
      "Point-of-care documentation for nursing, therapy, and interdisciplinary teams",
      "Comprehensive MDS 3.0 workflows with built-in validation and PDPM optimization",
      "Integrated eMAR/eTAR with pharmacy connectivity and medication safety controls",
    ],
    sections: [
      {
        heading: "Point-of-care documentation",
        items: [
          "Point-of-care documentation for nursing, therapy, and interdisciplinary teams",
          "Mobile-first charting at the bedside with offline capability",
          "Restorative nursing programs with daily logs and minutes auto-rolled into the MDS",
          "Therapy productivity, functional outcomes, and discharge planning in one workbench",
          "Care plans linked to assessments, orders, and resident preferences",
        ],
      },
      {
        heading: "MDS 3.0 & PDPM",
        items: [
          "Comprehensive MDS 3.0 assessment workflows with built-in validation",
          "Admission, annual, quarterly, and significant-change assessment cycles",
          "PDPM optimization built into every assessment",
          "AI-assisted MDS coding from narrative notes",
          "Automatic submission tracking and rejection follow-up",
        ],
      },
      {
        heading: "eMAR / eTAR & medication safety",
        items: [
          "Integrated eMAR and eTAR with pharmacy connectivity",
          "Barcode medication administration with patient and med verification",
          "Drug-drug interaction checks and high-alert double-check workflows",
          "Medication regimen review and pharmacist consultation queue",
          "Antibiotic stewardship with NHSN reporting",
          "Controlled substance reconciliation with two-witness sign-off",
        ],
      },
      {
        heading: "Specialized clinical programs",
        items: [
          "Wound care with photo capture, staging, and healing trajectory tracking",
          "Infection control with surveillance dashboards and outbreak workflows",
          "Falls prevention with post-fall huddle, root-cause analysis, and trend tracking",
          "Behavioral health with pattern identification and intervention effectiveness",
          "Pain management with body-diagram mapping and PRN follow-up",
          "Memory care and specialty-care-unit dashboards",
        ],
      },
      {
        heading: "Census, admissions & discharge",
        items: [
          "Lead pipeline from inquiry through tour, application, and admit",
          "Pre-admission screening and PASRR in one form",
          "Bed reservation with payer-tagged hold types",
          "Move-in checklist routed across departments",
          "Discharge readiness scorecard and post-acute placement workbench",
        ],
      },
      {
        heading: "Dining, nutrition & operations",
        items: [
          "Menu management, therapeutic-diet matrix, and allergy tracking",
          "Hydration and weight-loss alerts with auto-flag for at-risk residents",
          "Work orders and preventive maintenance for medical equipment",
          "Temperature logs, generator tests, and disaster drill records",
          "Resident transportation scheduling and cost tracking",
        ],
      },
    ],
  },

  {
    slug: "revenue-cycle",
    name: "Revenue Cycle Management",
    tagline: "From eligibility to write-off, one integrated billing engine.",
    summary:
      "A fully integrated billing engine supporting the entire claims lifecycle — automated submission, real-time eligibility, ERA processing, denial workflow, and the financial dashboards that close the revenue loop.",
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
          "Clearinghouse integration with end-to-end submission tracking",
          "State Medicaid eligibility verification",
        ],
      },
      {
        heading: "Denials, appeals & collections",
        items: [
          "Denial management with structured appeals workflow",
          "Patient responsibility tracking with statement automation",
          "Aging detail and per-payer collection workflow",
          "Bad-debt write-off and refund workflows with audit trail",
        ],
      },
      {
        heading: "Resident financial services",
        items: [
          "Self-pay statement automation with payment plans",
          "Online payments through the family portal",
          "Resident trust fund with dual-signature controls",
          "Sliding-scale calculator for community-care residents",
        ],
      },
      {
        heading: "Financial dashboards & cost reporting",
        items: [
          "Financial dashboards and accounts receivable visibility",
          "Length-of-stay and skilled-days analytics by payer",
          "Medicare cost-report data preparation",
          "CMS-339 bad-debt log support",
        ],
      },
    ],
  },

  {
    slug: "interoperability",
    name: "Interoperability at the Core",
    tagline: "An open healthcare platform built on the modern standards.",
    summary:
      "CareCore is designed as an open platform — native HL7 v2 and FHIR R4, SMART on FHIR, C-CDA exchange, plus pharmacy, lab, immunization registry, and clearinghouse connectivity that makes a modern post-acute facility actually interoperable.",
    highlights: [
      "Native HL7 v2 and FHIR R4 support",
      "SMART on FHIR integration framework",
      "C-CDA export and external data exchange",
    ],
    sections: [
      {
        heading: "Standards-based exchange",
        items: [
          "Native HL7 v2 messaging across ADT, ORM, ORU, MDM, and SIU",
          "FHIR R4 API for clinical data exchange",
          "SMART on FHIR app launch and integration framework",
          "C-CDA export and inbound import",
          "DIRECT secure messaging",
          "Provider Directory API per the CMS Interoperability Rule",
        ],
      },
      {
        heading: "Pharmacy, lab & imaging",
        items: [
          "Surescripts e-prescribing",
          "Long-term-care pharmacy connectivity for dispense and reconciliation",
          "Lab orders outbound and results inbound",
          "Radiology PACS integration for image viewing",
        ],
      },
      {
        heading: "Public health & state systems",
        items: [
          "Immunization registry submission to state IIS",
          "State PDMP integration for opioid checks at order entry",
          "HIE connectivity for cross-facility patient lookup",
        ],
      },
      {
        heading: "Hospital ADT & care coordination",
        items: [
          "Hospital ADT subscriptions with auto-import into the referral pipeline",
          "Cross-setting transfer with full clinical packet",
          "Bed-availability publishing back to acute partners",
        ],
      },
      {
        heading: "Operational integrations",
        items: [
          "Payments through Stripe and Square",
          "Accounting export to QuickBooks and Sage Intacct",
          "Payroll export to ADP and Paychex from PBJ",
          "DocuSign for legal forms",
          "Twilio for SMS, SendGrid and Postmark for email",
          "Google Calendar and Outlook sync for staff schedules",
          "Uber Health and LogistiCare for resident transportation",
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
          "Native iOS and Android apps for staff",
          "eMAR, eTAR, vitals, and notes at the bedside with offline mode",
          "Barcode scanning for medication and patient verification",
          "Push notifications and SMS alerts for critical events",
        ],
      },
      {
        heading: "Family portal",
        items: [
          "Native iOS and Android apps for family members",
          "Real-time updates on resident activity and care",
          "Care diary auto-narrated from clinical events",
          "Photo of the day, life-story memory book, and birthday calendar",
          "Video calls with click-to-join scheduling",
          "Spending-money requests with trust-fund integration",
          "Daily and weekly email digest summaries",
          "Translation services for non-English-speaking families",
        ],
      },
      {
        heading: "Resident kiosk",
        items: [
          "Meal pre-ordering and dietary preference selection",
          "Activity sign-up, ratings, and feedback",
          "Resident-to-resident messaging",
          "Religious and spiritual practice scheduling",
          "Library catalog for in-house book exchange",
        ],
      },
      {
        heading: "Secure messaging across care teams",
        items: [
          "Intra-facility staff chat with PHI permitted in-message",
          "Auto-generated 24-hour handoff reports",
          "Charge nurse rounding and shift huddle templates",
          "Alert routing engine with configurable escalation chains",
        ],
      },
      {
        heading: "Telehealth",
        items: [
          "Virtual physician visits with major telehealth providers",
          "Tele-mental health specialty queue",
          "Remote patient monitoring with wearable integration",
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
      "Self-scheduling, PBJ submission, license and competency tracking, the full QAPI lifecycle, and the audit logging and HIPAA-aligned access controls that keep the building survey-ready every day.",
    highlights: [
      "Staff scheduling, time tracking, and PBJ reporting",
      "QAPI, incident tracking, and survey management",
      "Built-in audit logging and HIPAA-compliant access controls",
    ],
    sections: [
      {
        heading: "Scheduling, time tracking & PBJ",
        items: [
          "Self-scheduling with open-shift marketplace and one-tap claim",
          "Mandatory-overtime tracking with state cap alerts",
          "PTO accrual and request workflow",
          "Integrated time tracking",
          "CMS PBJ submission automated with QA preview",
        ],
      },
      {
        heading: "Workforce lifecycle",
        items: [
          "Onboarding checklists with department sign-offs",
          "License, credential, and competency tracking with auto-renewal alerts",
          "Vaccination compliance and background-check expiration tracking",
          "Performance reviews and pulse engagement surveys",
          "Exit interviews with categorized turnover analytics",
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
        heading: "QAPI & quality",
        items: [
          "Live CMS Five-Star quality measure dashboard with peer percentiles",
          "Five-Star prediction simulator",
          "Performance Improvement Project lifecycle with PDSA cycles",
          "Sentinel event and root-cause analysis tracker",
          "Mock-survey workflow with F-tag checklist",
          "Resident satisfaction surveys including CMS CoreQ",
        ],
      },
      {
        heading: "Survey readiness & compliance",
        items: [
          "F-tag library with per-facility citation history",
          "Plan of Correction tracker with evidence upload",
          "State-specific incident and SOC reporting",
          "HIPAA breach tracking with 60-day notification",
          "Vendor BAA and certificate-of-insurance tracking",
        ],
      },
      {
        heading: "Resident rights",
        items: [
          "Resident Bill of Rights acknowledgment and annual review",
          "SOGI intake per CMS interpretive guidance",
          "Personal property inventory and lost-and-found",
          "Photo consent management with opt-in tiers",
        ],
      },
      {
        heading: "Audit, identity & security",
        items: [
          "SAML / SSO with Okta, Azure AD, and Google Workspace",
          "SCIM provisioning, MFA, and IP allowlist",
          "Role-based access control with configurable session timeouts",
          "PHI access audit dashboard with full audit trail",
          "Off-host backups and multi-region failover",
          "SOC 2 Type II evidence collection automation",
        ],
      },
    ],
  },

  {
    slug: "intelligent-care",
    name: "Intelligent, Data-Driven Care",
    tagline: "Live numbers, peer benchmarks, and an assistant that knows your data.",
    summary:
      "Real-time dashboards across census, quality measures, and finance; automated workflows and compliance alerts; and an AI-powered assistant that supports staff in plain English, reducing administrative burden across every shift.",
    highlights: [
      "Real-time dashboards for census, quality measures, and financial performance",
      "Automated workflows and compliance alerts",
      "AI-powered assistant to support staff and reduce administrative burden",
    ],
    sections: [
      {
        heading: "Real-time dashboards",
        items: [
          "Census forecast with payer-mix breakdown",
          "Length-of-stay and readmission analytics",
          "Falls, infection, pressure-ulcer, and behavior trends with peer benchmarks",
          "Antibiotic days-of-therapy and antipsychotic prevalence dashboards",
          "Survey deficiency analysis vs state and national averages",
          "Five-Star peer-percentile dashboard",
        ],
      },
      {
        heading: "Custom reporting & data export",
        items: [
          "Drag-and-drop custom report builder with scheduled delivery",
          "Nightly data warehouse export for BI tools",
          "Scheduled regulatory exports for NHSN, MDS, and PBJ",
        ],
      },
      {
        heading: "AI assistant",
        items: [
          "In-app assistant queryable in plain English, grounded in your data",
          "Voice queries for hands-free use",
          "AI-assisted nursing note generation and dictation",
          "Documentation completeness checker per role and shift",
          "Smart triage of family messages",
        ],
      },
      {
        heading: "Predictive scoring & automation",
        items: [
          "Predictive fall-risk and 30-day readmission scoring",
          "PDPM optimization suggestions",
          "MDS auto-coding from narrative notes",
          "Anomaly detection in vitals against resident baseline",
          "Activity recommendation engine matched to preferences and cognition",
          "Automated compliance alerts for assessment windows and credential expirations",
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
