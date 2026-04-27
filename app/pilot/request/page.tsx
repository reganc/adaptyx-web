import Link from "next/link";
import { editorialColors, Eyebrow } from "@/components/Brand";
import { Masthead } from "@/components/sections/Masthead";
import { Footer } from "@/components/sections/Footer";
import { PilotForm } from "@/components/sections/PilotForm";

export const metadata = {
  title: "Request a Pilot — CareCore by Adaptyx",
  description:
    "Tell us about your facility and we'll get back within one business day to scope a 30-day pilot.",
};

export default function PilotRequestPage() {
  return (
    <main className="design-frame" style={{ background: editorialColors.cream }}>
      <Masthead />

      <section
        style={{
          background: editorialColors.navy,
          color: "#fff",
          padding: "96px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          <Eyebrow color={editorialColors.gold} style={{ marginBottom: 16 }}>
            Pilot Request
          </Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 64,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              margin: 0,
              marginBottom: 20,
              textWrap: "balance",
            }}
          >
            Tell us about your facility.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              marginBottom: 40,
            }}
          >
            We&apos;ll respond within one business day to scope a 30-day pilot.
            See the{" "}
            <Link
              href="/pilot"
              style={{ color: editorialColors.gold, textDecoration: "underline" }}
            >
              pilot terms
            </Link>{" "}
            for what&apos;s involved.
          </p>

          <div
            style={{
              background: editorialColors.navyMid,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 36,
              borderRadius: 2,
            }}
          >
            <PilotForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
