"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";
import { ProductIcon, AdaptyxMark } from "./ProductIcon";

type NavProps = {
  variant?: "dark" | "light";
};

export const AdaptyxNav = ({ variant = "dark" }: NavProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ddRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const isDark = variant === "dark" && !scrolled;
  const fg = isDark ? "#ffffff" : "#111111";
  const navBg = isDark ? "rgba(7,16,31,0.6)" : "rgba(245,243,239,0.86)";
  const border = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--color-border)";

  const linkStyle = {
    fontFamily: "var(--font-ui)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: fg,
    opacity: 0.8,
    transition: "opacity 150ms ease-out, color 150ms ease-out",
    textDecoration: "none",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: navBg,
        borderBottom: border,
        color: fg,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          aria-label="Adaptyx Labs home"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, color: fg, flexShrink: 0 }}
        >
          <AdaptyxMark size={26} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 20,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Adapt<em style={{ fontStyle: "normal", color: "var(--color-gold)" }}>yx</em>
          </span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div ref={ddRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              style={{
                ...linkStyle,
                background: "transparent",
                border: 0,
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
              }}
            >
              Products
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transition: "transform 150ms ease-out",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
              </svg>
            </button>

            <div
              style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "50%",
                width: 720,
                maxWidth: "92vw",
                transform: `translateX(-50%) translateY(${open ? "0" : "-4px"})`,
                opacity: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none",
                background: "#fff",
                color: "#111",
                border: "1px solid var(--color-border)",
                borderRadius: 2,
                boxShadow: "0 8px 40px rgba(0,0,0,0.30)",
                padding: 24,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 4,
                transition: "opacity 150ms ease-out, transform 150ms ease-out",
              }}
            >
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 14,
                    padding: 12,
                    borderRadius: 2,
                    textDecoration: "none",
                    color: "#111",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      border: "1px solid var(--color-border)",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--color-off-white)",
                      color: "var(--color-navy)",
                      marginTop: 2,
                    }}
                  >
                    <ProductIcon id={p.id} size={16} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 17,
                        letterSpacing: "-0.005em",
                        lineHeight: 1.15,
                      }}
                    >
                      {p.name}
                      <span
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-gold-dark)",
                          marginLeft: 8,
                          verticalAlign: 2,
                          fontWeight: 600,
                        }}
                      >
                        {p.vertical}
                      </span>
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-stone)", marginTop: 3, lineHeight: 1.45 }}>
                      {p.tagline.split(". ")[0]}.
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#contact" style={linkStyle}>Contact</Link>
        </div>

        <Link
          href="/#contact"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "10px 18px",
            border: `1px solid ${fg}`,
            color: fg,
            borderRadius: 2,
            transition: "all 150ms ease-out",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          Book a demo <span aria-hidden>→</span>
        </Link>
      </div>
    </nav>
  );
};
