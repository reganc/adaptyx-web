"use client";

import { useState } from "react";

type CTABlockProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  contactLine?: string;
  emailPlaceholder?: string;
  companyLabel?: string;
  companyPlaceholder?: string;
  interestedLabel?: string;
  interestedOptions?: ReadonlyArray<string>;
  submitLabel?: string;
};

export const CTABlock = ({
  eyebrow = "Talk to a product team",
  heading,
  body,
  contactLine = "hello@adaptyx.labs · adaptyx.labs · atlanta / san francisco",
  emailPlaceholder = "you@company.com",
  companyLabel = "Company",
  companyPlaceholder = "Acme, Inc.",
  interestedLabel = "Interested in",
  interestedOptions = [
    "Adaptyx SNF — Skilled Nursing",
    "Adaptyx ALF — Assisted Living",
    "Adaptyx Build — Construction",
    "Adaptyx Terra — Regenerative Farming",
    "Adaptyx Signal — Predictive Analytics",
    "Not sure yet — tell me more",
  ],
  submitLabel = "Request a demo",
}: CTABlockProps) => {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      style={{
        background: "var(--color-navy-deep)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "120px 32px",
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
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 70% 50%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 50%, black 20%, transparent 75%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ display: "inline-block", width: 28, height: 1, background: "currentColor" }} />
            {eyebrow}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(40px, 5.5vw, 76px)",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: "18px 0 24px",
              textWrap: "balance",
            }}
          >
            {heading}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 18, maxWidth: "52ch", margin: "0 0 32px", lineHeight: 1.6 }}>
            {body}
          </p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.5 }}>{contactLine}</div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: 28,
            borderRadius: 2,
          }}
        >
          <FormLabel>Work email</FormLabel>
          <FormInput type="email" placeholder={emailPlaceholder} required />
          <FormLabel>{companyLabel}</FormLabel>
          <FormInput type="text" placeholder={companyPlaceholder} />
          <FormLabel>{interestedLabel}</FormLabel>
          <FormSelect options={interestedOptions} />
          <button
            type="submit"
            style={{
              width: "100%",
              background: "var(--color-gold)",
              color: "#07101F",
              border: 0,
              padding: 14,
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {sent ? "Thanks — we'll be in touch →" : <>{submitLabel} <span aria-hidden>→</span></>}
          </button>
        </form>
      </div>
    </section>
  );
};

const FormLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "var(--font-ui)",
      fontSize: 10.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.55)",
      marginBottom: 6,
    }}
  >
    {children}
  </div>
);

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: 0,
  borderBottom: "1px solid rgba(255,255,255,0.18)",
  padding: "10px 0 14px",
  color: "#fff",
  fontFamily: "var(--font-body)",
  fontSize: 16,
  marginBottom: 20,
  outline: "none",
};

const FormInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} style={inputStyle} />;

const FormSelect = ({ options }: { options: ReadonlyArray<string> }) => (
  <select style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: "rgba(255,255,255,0.8)" }}>
    {options.map((o) => (
      <option key={o} style={{ color: "#000" }}>
        {o}
      </option>
    ))}
  </select>
);
