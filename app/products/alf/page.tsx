import type { Metadata } from "next";
import Link from "next/link";
import { AdaptyxNav } from "@/components/adaptyx/Nav";
import { AdaptyxFooter } from "@/components/adaptyx/Footer";
import { CTABlock } from "@/components/adaptyx/CTABlock";
import { MoreProducts } from "@/components/adaptyx/MoreProducts";
import { SecHead, Eyebrow } from "@/components/adaptyx/SecHead";

export const metadata: Metadata = {
  title: { absolute: "Adaptyx ALF — AI-native software for assisted living communities" },
  description:
    "Adaptyx ALF is the resident-centered platform for assisted living communities. Wellness intelligence, medication management, ADL tracking, and a family portal that gives loved ones a real window into care.",
  alternates: { canonical: "/products/alf" },
  openGraph: {
    type: "website",
    url: "/products/alf",
    title: "Adaptyx ALF — Assisted Living",
    description:
      "Resident-centered software for assisted living communities. ADL tracking, medication management, wellness intelligence, and a family portal that works.",
  },
};

export default function AlfProductPage() {
  return (
    <main style={{ background: "var(--color-cream)" }}>
      <AdaptyxNav variant="dark" />
      <ProductHero />
      <Capabilities />
      <ProductPreview />
      <AiExamples />
      <Outcomes />
      <CTABlock
        eyebrow="Adaptyx ALF · Live in 48 communities"
        heading="The platform your families have been waiting for."
        body="Schedule a demo with an Adaptyx clinical lead and a product engineer. We'll bring a pre-configured build for a community your size — single building or multi-site — and walk through the first 60 days."
        contactLine="alf@adaptyx.labs · hipaa · soc 2"
        companyLabel="Community"
        companyPlaceholder="Linden Grove · 96 units"
        interestedLabel="Role"
        interestedOptions={[
          "Executive Director",
          "Director of Resident Care",
          "Regional Operations",
          "Family Services",
          "Other",
        ]}
        submitLabel="Book a demo"
      />
      <MoreProducts excludeId="alf" />
      <AdaptyxFooter />
    </main>
  );
}

const ProductHero = () => (
  <header
    style={{
      position: "relative",
      background: "var(--color-navy-deep)",
      color: "#fff",
      overflow: "hidden",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    />
    <div
      style={{
        position: "relative",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "96px 32px 88px",
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: 72,
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 14,
            textTransform: "uppercase",
          }}
        >
          <Link href="/" style={{ color: "inherit" }}>Adaptyx Labs</Link> · Products · Adaptyx ALF
        </div>
        <Eyebrow onDark>Assisted Living Operations</Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 6.5vw, 92px)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            margin: "16px 0 24px",
            color: "#fff",
            textWrap: "balance",
          }}
        >
          A community is a home.{" "}
          <em style={{ fontStyle: "normal", color: "var(--color-gold-light)" }}>Software should know that.</em>
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.78)",
            maxWidth: "52ch",
            margin: "0 0 32px",
          }}
        >
          Adaptyx ALF is the resident-centered platform for assisted living communities. Wellness intelligence,
          medication management, ADL tracking, and a family portal that does what every adult child has been waiting
          for — show, don&apos;t tell, what care looks like today.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="#contact"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 22px",
              background: "var(--color-gold)",
              color: "#07101F",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Book a demo <span aria-hidden>→</span>
          </Link>
          <Link
            href="#capabilities"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 22px",
              border: "1px solid currentColor",
              color: "#fff",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            See capabilities
          </Link>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            maxWidth: 720,
          }}
        >
          <Meta k="Live communities" v="48" />
          <Meta k="Residents" v="6,200" />
          <Meta k="Family activation" v="88%" />
          <Meta k="Certifications" v="HIPAA · SOC 2" />
        </div>
      </div>

      <WellnessVis />
    </div>
  </header>
);

const Meta = ({ k, v }: { k: string; v: string }) => (
  <div>
    <div
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        opacity: 0.5,
        marginBottom: 6,
      }}
    >
      {k}
    </div>
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: "-0.01em",
      }}
    >
      {v}
    </div>
  </div>
);

type AdlDot = "on" | "miss" | "pending";
type WCard = { initials: string; name: string; sub: string; trend: string; trendDir: "up" | "down"; dots: AdlDot[] };

const wellnessCards: ReadonlyArray<WCard> = [
  {
    initials: "EM",
    name: "Eleanor M., Apt 204",
    sub: "ADL · 5/6 logged · MEDS · all on time",
    trend: "Sleep ↑ · steps stable",
    trendDir: "up",
    dots: ["on", "on", "on", "on", "on", "pending"],
  },
  {
    initials: "RJ",
    name: "Robert J., Apt 117",
    sub: "ADL · 4/6 logged · MEDS · 1 PRN today",
    trend: "Activity ↓ 22% (3-day)",
    trendDir: "down",
    dots: ["on", "on", "miss", "on", "on", "pending"],
  },
  {
    initials: "MO",
    name: "Margaret O., Apt 315",
    sub: "ADL · 6/6 logged · MEDS · all on time",
    trend: "Mood +, family visit today",
    trendDir: "up",
    dots: ["on", "on", "on", "on", "on", "on"],
  },
  {
    initials: "FT",
    name: "Frank T., Apt 208",
    sub: "ADL · 3/6 logged · MEDS · refused 0800 BP",
    trend: "Behavior change flagged",
    trendDir: "down",
    dots: ["on", "miss", "on", "miss", "pending", "pending"],
  },
  {
    initials: "SP",
    name: "Sylvia P., Apt 102",
    sub: "ADL · 5/6 logged · MEDS · all on time",
    trend: "Walking goal hit 4d straight",
    trendDir: "up",
    dots: ["on", "on", "on", "on", "on", "pending"],
  },
];

const WellnessVis = () => (
  <div
    style={{
      position: "relative",
      border: "1px solid rgba(255,255,255,0.12)",
      background:
        "radial-gradient(ellipse at 30% 20%, rgba(200,146,42,0.12), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      borderRadius: 2,
      overflow: "hidden",
      aspectRatio: "1 / 1.02",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 18px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.05em",
        opacity: 0.75,
      }}
    >
      <span>
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--color-gold)",
            marginRight: 8,
            boxShadow: "0 0 0 3px rgba(200,146,42,0.18)",
            animation: "adxPulse 1.8s ease-in-out infinite",
          }}
        />
        adaptyx.alf · linden grove
      </span>
      <span>14:22 · WED</span>
    </div>

    <div style={{ position: "relative", padding: "22px 22px 56px", height: "calc(100% - 46px)", overflow: "hidden" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        Today&apos;s residents · wellness signal
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {wellnessCards.map((c) => (
          <WellnessCard key={c.initials} card={c} />
        ))}
      </div>
    </div>

    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 18px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.05em",
        opacity: 0.6,
        background: "rgba(7,16,31,0.4)",
      }}
    >
      <span>residents · 96</span>
      <span>signals · 2 attention</span>
      <span>last sync · 14s</span>
    </div>
  </div>
);

const WellnessCard = ({ card }: { card: WCard }) => (
  <div
    style={{
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.02)",
      borderRadius: 2,
      padding: "12px 14px",
      display: "grid",
      gridTemplateColumns: "28px 1fr auto",
      gap: 12,
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "rgba(200,146,42,0.18)",
        border: "1px solid rgba(200,146,42,0.4)",
        color: "var(--color-gold-light)",
        fontFamily: "var(--font-ui)",
        fontSize: 10,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {card.initials}
    </div>
    <div>
      <div
        style={{
          color: "#fff",
          fontFamily: "var(--font-ui)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.02em",
          marginBottom: 3,
        }}
      >
        {card.name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9.5,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.05em",
        }}
      >
        {card.sub}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: card.trendDir === "up" ? "#6BD08C" : "#E5876A",
          marginTop: 4,
        }}
      >
        {card.trend}
      </div>
    </div>
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {card.dots.map((d, i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background:
              d === "on"
                ? "var(--color-success)"
                : d === "miss"
                  ? "#E5876A"
                  : "var(--color-gold-light)",
            opacity: d === "pending" ? 0.7 : 1,
          }}
        />
      ))}
    </div>
  </div>
);

const Capabilities = () => (
  <section
    id="capabilities"
    style={{ background: "var(--color-navy)", color: "#fff", padding: "120px 32px" }}
  >
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        onDark
        index="§ 01 — Capabilities"
        eyebrow="What's inside"
        heading={<>Built around the resident — and everyone who cares about them.</>}
        lede="Assisted living is less about acute care and more about pattern recognition over weeks and months. Adaptyx ALF treats the resident as the unit of analysis — and gives caregivers, executive directors, and families the same source of truth."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <Capability
          num="01"
          title="Wellness anomaly detection"
          body="Builds a baseline of each resident's normal — sleep, activity, mood, social engagement, vitals — and surfaces meaningful deviations, not noise. Catches decline weeks earlier than scheduled assessments."
          tags={["per-resident baseline", "multimodal signals", "noise-suppressed"]}
          rightBorder
        />
        <Capability
          num="02"
          title="eMAR + medication intelligence"
          body="An electronic MAR with AI that watches refusal patterns, PRN trends, and polypharmacy risk. Flags interactions in plain English; routes high-confidence refills to pharmacy without staff data-entry."
          tags={["eMAR", "polypharmacy alerts", "pharmacy integration"]}
        />
        <Capability
          num="03"
          title="ADL tracking, captured in flow"
          body="Caregivers log ADLs the way they do the work — voice, tap, quick photo. The system structures it, scores it, and turns three weeks of notes into a real picture of independence over time."
          tags={["voice-to-chart", "independence trajectory", "level-of-care signals"]}
          rightBorder
        />
        <Capability
          num="04"
          title="Family portal & AI updates"
          body="The family portal shows photos, ADLs at a glance, and weekly AI-written summaries reviewed by a real caregiver. Two-way messaging routes to the right staff. Activation hits 88% within 60 days."
          tags={["weekly AI summary", "caregiver-reviewed", "two-way routing"]}
        />
      </div>
    </div>
  </section>
);

const Capability = ({
  num,
  title,
  body,
  tags,
  rightBorder = false,
}: {
  num: string;
  title: string;
  body: string;
  tags: ReadonlyArray<string>;
  rightBorder?: boolean;
}) => (
  <div
    style={{
      padding: "48px 40px",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      borderRight: rightBorder ? "1px solid rgba(255,255,255,0.12)" : "none",
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      gap: 24,
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 40,
        fontWeight: 900,
        color: "var(--color-gold)",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}
    >
      {num}
    </div>
    <div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          margin: "0 0 12px",
          color: "#fff",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", margin: "0 0 20px", maxWidth: "48ch", lineHeight: 1.55 }}>
        {body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              letterSpacing: "0.04em",
              padding: "4px 8px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              borderRadius: 2,
              textTransform: "uppercase",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

type Ev = { kind?: "ai" | "alert" | "ok"; time: string; title: string; body: string; ai?: { lbl: string; text: string } };
const events: ReadonlyArray<Ev> = [
  {
    kind: "ai",
    time: "14:10 · ADAPTYX SIGNAL",
    title: "Activity ↓ 22% over 3 days · attention recommended",
    body:
      "Robert's step count and lounge-area presence have both dropped versus his rolling 14-day baseline. No corresponding mood or sleep change yet — could be early.",
    ai: {
      lbl: "DRIVERS",
      text: "steps 2,140 → 1,680 → 1,510 · lounge minutes 95 → 60 → 42 · meals attended unchanged",
    },
  },
  {
    time: "13:45 · CAREGIVER · A. PATEL",
    title: "Lunch attended · ate ~75%",
    body: "Sat with usual group. Mentioned hip is \"a little stiff today.\" No request for help.",
  },
  {
    kind: "alert",
    time: "10:30 · MEDS",
    title: "0800 BP medication · refused, re-offered 0930 · accepted",
    body: "Refusal pattern: 3rd time in 14 days, all on Wednesday morning. Flagged for nurse review.",
  },
  {
    time: "09:15 · ADL · DRESSING",
    title: "Required help with shoes",
    body: "Independent for upper body. Wanted to do shoes himself but accepted help.",
  },
  {
    kind: "ok",
    time: "07:40 · VITALS",
    title: "BP 138/82 · HR 76 · within range",
    body: "No changes from baseline.",
  },
  {
    time: "07:00 · ADL · MORNING ROUTINE",
    title: "Bathing, grooming · self with set-up",
    body: "Independent. Brief.",
  },
];

const ProductPreview = () => (
  <section style={{ padding: "120px 32px", background: "var(--color-cream)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        index="§ 02 — Inside the product"
        eyebrow="Resident view · Robert J., 117"
        heading={<>Three weeks of small signals, surfaced before anything goes wrong.</>}
        lede="A real resident view from a real Adaptyx ALF community. The activity timeline on the left, the family communication on the right — every interaction the building has had with Robert J. today, plus what the system is suggesting his caregivers do next."
      />
      <div
        style={{
          background: "var(--color-off-white)",
          border: "1px solid var(--color-border)",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 18px",
            background: "var(--color-navy)",
            color: "#fff",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.05em",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.22)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.22)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.22)" }} />
          </div>
          <div>adaptyx.alf — resident · Robert J., Apt 117</div>
          <div>Linden Grove</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", minHeight: 580 }}>
          <div style={{ padding: 28, background: "var(--color-off-white)", borderRight: "1px solid var(--color-border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                Today&apos;s activity
              </h4>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-stone)" }}>14:22</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-stone)",
                marginBottom: 20,
              }}
            >
              Wellness signal · attention
            </div>
            <div style={{ position: "relative", paddingLeft: 24 }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: 7,
                  top: 8,
                  bottom: 8,
                  width: 1,
                  background: "var(--color-border)",
                }}
              />
              {events.map((e, idx) => (
                <EventRow key={idx} e={e} last={idx === events.length - 1} />
              ))}
            </div>
          </div>

          <FamilyPanel />
        </div>
      </div>
    </div>
  </section>
);

const EventRow = ({ e, last }: { e: Ev; last: boolean }) => {
  const dotColors: Record<NonNullable<Ev["kind"]> | "default", { bg: string; border: string }> = {
    default: { bg: "#fff", border: "var(--color-stone)" },
    ai: { bg: "var(--color-gold)", border: "var(--color-gold-dark)" },
    alert: { bg: "#B8493A", border: "#B8493A" },
    ok: { bg: "var(--color-success)", border: "var(--color-success)" },
  };
  const c = dotColors[e.kind ?? "default"];
  return (
    <div
      style={{
        position: "relative",
        padding: "12px 0",
        borderBottom: last ? "none" : "1px solid var(--color-border)",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: -21,
          top: 17,
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: c.bg,
          border: `2px solid ${c.border}`,
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          color: "var(--color-stone)",
          letterSpacing: "0.05em",
          marginBottom: 4,
        }}
      >
        {e.time}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 15.5,
          fontWeight: 600,
          letterSpacing: "-0.005em",
          marginBottom: 4,
          lineHeight: 1.2,
        }}
      >
        {e.title}
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#111", opacity: 0.82 }}>{e.body}</div>
      {e.ai ? (
        <div
          style={{
            marginTop: 8,
            padding: "8px 12px",
            background: "rgba(200,146,42,0.08)",
            border: "1px solid rgba(200,146,42,0.25)",
            borderRadius: 2,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            lineHeight: 1.5,
            color: "var(--color-gold-dark)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9.5,
              letterSpacing: "0.08em",
              color: "var(--color-gold)",
              fontWeight: 700,
              marginRight: 6,
            }}
          >
            {e.ai.lbl}
          </span>
          {e.ai.text}
        </div>
      ) : null}
    </div>
  );
};

const FamilyPanel = () => (
  <div style={{ padding: 28, background: "#fff" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--color-gold-light)",
          color: "#07101F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        SJ
      </div>
      <div>
        <h5
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.005em",
          }}
        >
          Sarah J. — daughter
        </h5>
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--color-stone)",
            marginTop: 2,
          }}
        >
          Primary contact · last login 2h ago
        </div>
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxHeight: 320 }}>
      <Msg from="fam">
        <MsgMeta>SARAH J. · TUE 19:42</MsgMeta>
        Hi! Just checking in — Dad mentioned on the phone he was feeling off. Anything we should know about?
      </Msg>
      <Msg from="ai">
        <MsgMeta gold>WEEKLY UPDATE · AI DRAFT FOR REVIEW</MsgMeta>
        Hi Sarah — quick mid-week note. Your dad&apos;s had a good day overall today. He attended both meals and visited
        with friends at lunch. We did notice he&apos;s been a bit less active over the last few days, and his Wednesday
        morning blood-pressure medication has been refused on a couple of occasions (he took it later in the morning).
        His nurse, A. Patel, will check in with him this afternoon and we&apos;ll keep you posted.
      </Msg>
    </div>

    <div
      style={{
        marginTop: 14,
        display: "flex",
        gap: 8,
        alignItems: "center",
        padding: "10px 12px",
        border: "1px solid var(--color-border)",
        borderRadius: 2,
        background: "var(--color-off-white)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 12,
          color: "var(--color-stone)",
          letterSpacing: "0.03em",
          flex: 1,
        }}
      >
        AI draft ready · review &amp; send
      </div>
      <button
        type="button"
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          background: "var(--color-navy)",
          color: "#fff",
          border: 0,
          padding: "8px 14px",
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        Send →
      </button>
    </div>

    <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--color-border)" }}>
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 11,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--color-stone)",
          marginBottom: 12,
        }}
      >
        Suggested next actions
      </div>
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, lineHeight: 1.5 }}>
        {[
          "Nurse check-in re: Wed morning meds",
          "Recreation staff: invite to walking group",
          "Watch activity trend next 72h",
        ].map((a) => (
          <div
            key={a}
            style={{
              padding: "8px 0",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{a}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-gold-dark)" }}>AI</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Msg = ({ from, children }: { from: "fam" | "ai"; children: React.ReactNode }) => (
  <div
    style={{
      padding: "12px 14px",
      borderRadius: 2,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.5,
      maxWidth: "92%",
      border: from === "ai" ? "1px solid rgba(200,146,42,0.3)" : "1px solid var(--color-border)",
      background: from === "ai" ? "rgba(200,146,42,0.08)" : "#fff",
      alignSelf: from === "ai" ? "flex-end" : "flex-start",
    }}
  >
    {children}
    {from === "ai" ? (
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9.5,
          color: "var(--color-gold-dark)",
          letterSpacing: "0.08em",
          marginTop: 6,
        }}
      >
        AI DRAFT · review before send
      </div>
    ) : null}
  </div>
);

const MsgMeta = ({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) => (
  <div
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: gold ? "var(--color-gold-dark)" : "var(--color-stone)",
      marginBottom: 4,
      letterSpacing: "0.04em",
    }}
  >
    {children}
  </div>
);

const examples = [
  {
    who: "A caregiver, mid-shift",
    title: "Voice notes turn into structured ADL records",
    body:
      "Caregivers can say what they observed; the system files it correctly across ADL, behavior, and care-plan fields. No typing, no clicking through six tabs.",
    scenario: [
      { spk: "CAREGIVER", text: "\"Robert needed help with shoes again, otherwise dressed himself. Hip was stiff.\"" },
      { spk: "FILED", text: "ADL.dressing · partial assist · lower body · 1 staff. Note added to PT consult thread." },
    ],
  },
  {
    who: "Executive director, Monday morning",
    title: "Census, occupancy, and acuity, ready before standup",
    body:
      "The Monday operations brief is written by the system — move-ins/outs, level-of-care changes, regulatory items, and the residents trending toward higher acuity that need to be discussed.",
    scenario: [
      {
        spk: "BRIEF",
        text:
          "Occupancy 94.8% (+1 since Friday). 2 residents flagged for LoC re-evaluation: Frank T. (ADL trend), Eleanor M. (cognitive screen due).",
      },
    ],
  },
  {
    who: "A family, Sunday evening",
    title: "The weekly summary writes itself, then a human signs it",
    body:
      "Every Sunday, families get a real summary — what their loved one did, how they felt, what staff noticed. Drafted by AI, reviewed by the resident's primary caregiver, sent over the portal.",
    scenario: [
      {
        spk: "SUMMARY",
        text:
          "\"This week your mom attended 14 of 15 meals, spent more time outdoors than usual on the warmer days, and started joining the Wednesday painting group. She mentioned her hip a few times…\"",
      },
    ],
  },
  {
    who: "A clinical lead, on rounds",
    title: "Medication interactions flagged in plain English",
    body:
      "When a new prescription is added, the system checks for interactions across the resident's full med list — and surfaces the ones that actually matter at this resident's age, dosing, and history.",
    scenario: [
      {
        spk: "FLAG",
        text:
          "New: gabapentin 300mg + existing lorazepam → elevated falls risk at this age. Suggest dose timing review with prescriber.",
      },
    ],
  },
];

const AiExamples = () => (
  <section style={{ background: "var(--color-off-white)", padding: "120px 32px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        index="§ 03 — In practice"
        eyebrow="How AI shows up in the community"
        heading={<>Quietly. Concretely. In the moments that matter.</>}
        lede="Assisted living staff don't have time for AI as a separate thing. In Adaptyx ALF, the AI is the path of least resistance for the work people are already doing."
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {examples.map((ex) => (
          <div
            key={ex.title}
            style={{
              background: "var(--color-cream)",
              border: "1px solid var(--color-border)",
              padding: "28px 32px",
              borderRadius: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9.5,
                  letterSpacing: "0.08em",
                  background: "var(--color-gold)",
                  color: "#07101F",
                  padding: "3px 7px",
                  borderRadius: 2,
                  fontWeight: 700,
                }}
              >
                AI
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-stone)",
                }}
              >
                {ex.who}
              </span>
            </div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                margin: "0 0 12px",
              }}
            >
              {ex.title}
            </h4>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, margin: 0, opacity: 0.82 }}>{ex.body}</p>
            <div
              style={{
                marginTop: 16,
                padding: "14px 16px",
                background: "#fff",
                border: "1px dashed var(--color-border)",
                borderRadius: 2,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                lineHeight: 1.5,
              }}
            >
              {ex.scenario.map((s, idx) => (
                <div key={idx} style={{ marginTop: idx === 0 ? 0 : 6 }}>
                  <span style={{ color: "var(--color-gold-dark)", fontWeight: 700, marginRight: 8 }}>{s.spk}</span>
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const outcomes: ReadonlyArray<{ v: string; unit: string; l: string; d: string }> = [
  { v: "88", unit: "%", l: "Family activation", d: "Active family-portal usage within 60 days of resident move-in." },
  { v: "3.4", unit: "×", l: "Earlier decline detection", d: "Wellness anomalies surfaced this many times sooner than baseline assessments would catch." },
  { v: "52", unit: "%", l: "Charting time", d: "Reduction in caregiver charting time vs. communities' prior platforms." },
  { v: "94", unit: "%", l: "Family NPS", d: "Median family-portal NPS after 90 days. (Industry median: 38.)" },
];

const Outcomes = () => (
  <section style={{ padding: "120px 32px", background: "var(--color-cream)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SecHead
        index="§ 04 — Outcomes"
        eyebrow="Across 48 communities · Q1 2026"
        heading={<>The numbers families and operators both care about.</>}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "1px solid var(--color-border)",
          background: "#fff",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {outcomes.map((o, i) => (
          <div
            key={o.l}
            style={{
              padding: "32px 28px",
              borderRight: i < outcomes.length - 1 ? "1px solid var(--color-border)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 48,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--color-navy)",
                marginBottom: 8,
              }}
            >
              {o.v}
              <span style={{ fontSize: 22, color: "var(--color-gold-dark)", marginLeft: 4, verticalAlign: 4 }}>
                {o.unit}
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-stone)",
                marginBottom: 8,
              }}
            >
              {o.l}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.78 }}>{o.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
