"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { editorialColors } from "../Brand";

type Status = "idle" | "submitting" | "success" | "error";

const fieldWrap: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const labelStyle: CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: editorialColors.gold,
};

const inputStyle: CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 15,
  lineHeight: 1.4,
  color: "#fff",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: 2,
  padding: "12px 14px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export const PilotForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      role: String(data.get("role") ?? ""),
      facility: String(data.get("facility") ?? ""),
      beds: String(data.get("beds") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          fontFamily: "var(--font-body)",
          color: "rgba(255,255,255,0.9)",
          fontSize: 17,
          lineHeight: 1.6,
          padding: "24px 0",
        }}
      >
        <div
          style={{
            ...labelStyle,
            color: editorialColors.gold,
            marginBottom: 12,
          }}
        >
          Request received
        </div>
        Thanks — we&apos;ll be in touch within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <label style={fieldWrap}>
          <span style={labelStyle}>Name</span>
          <input name="name" required maxLength={200} style={inputStyle} />
        </label>
        <label style={fieldWrap}>
          <span style={labelStyle}>Work Email</span>
          <input name="email" type="email" required maxLength={200} style={inputStyle} />
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <label style={fieldWrap}>
          <span style={labelStyle}>Role / Title</span>
          <input name="role" maxLength={200} style={inputStyle} />
        </label>
        <label style={fieldWrap}>
          <span style={labelStyle}>Phone (optional)</span>
          <input name="phone" type="tel" maxLength={40} style={inputStyle} />
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <label style={fieldWrap}>
          <span style={labelStyle}>Facility / Organization</span>
          <input name="facility" required maxLength={200} style={inputStyle} />
        </label>
        <label style={fieldWrap}>
          <span style={labelStyle}>Approx. Beds</span>
          <input name="beds" inputMode="numeric" maxLength={10} style={inputStyle} />
        </label>
      </div>

      <label style={fieldWrap}>
        <span style={labelStyle}>What problem are you trying to solve?</span>
        <textarea
          name="message"
          rows={4}
          maxLength={5000}
          style={{ ...inputStyle, resize: "vertical", minHeight: 96 }}
        />
      </label>

      {status === "error" && (
        <div
          role="alert"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "#ffb4b4",
          }}
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          background: editorialColors.gold,
          color: "#fff",
          border: "none",
          padding: "0 36px",
          height: 60,
          borderRadius: 2,
          cursor: status === "submitting" ? "wait" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
          justifySelf: "start",
        }}
      >
        {status === "submitting" ? "Sending…" : "Request Your Pilot →"}
      </button>

      <div
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: 14,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        Average response time from our team: under one business day.
      </div>
    </form>
  );
};
