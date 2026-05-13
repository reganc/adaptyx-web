import type { ReactElement } from "react";
import type { ProductId } from "@/lib/products";

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<ProductId, ReactElement> = {
  snf: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M10 21v-6h4v6" />
      <path d="M12 11h.01" />
    </>
  ),
  alf: (
    <>
      <path d="M3 12l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
      <circle cx="12" cy="12.5" r="1" />
    </>
  ),
  build: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l4-2v16" />
      <path d="M9 21V5l6 2v14" />
      <path d="M15 21V9l4 2v10" />
    </>
  ),
  terra: (
    <>
      <path d="M12 3c-3 4-3 9 0 14 3-5 3-10 0-14z" />
      <path d="M5 14c2 3 5 4 7 3" />
      <path d="M19 14c-2 3-5 4-7 3" />
      <path d="M12 21v-4" />
    </>
  ),
  signal: (
    <>
      <path d="M3 17l5-6 4 4 6-9" />
      <path d="M14 6h4v4" />
      <path d="M3 21h18" />
    </>
  ),
};

export const ProductIcon = ({ id, size = 24 }: { id: ProductId; size?: number }) => (
  <svg width={size} height={size} {...baseProps}>
    {paths[id]}
  </svg>
);

export const AdaptyxMark = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
    <path d="M32 6 L58 32 L32 32 Z" fill="currentColor" opacity="0.92" />
    <path d="M58 32 L32 58 L32 32 Z" fill="currentColor" opacity="0.55" />
    <path d="M32 58 L6 32 L32 32 Z" fill="currentColor" opacity="0.78" />
    <path d="M6 32 L32 6 L32 32 Z" fill="#C8922A" transform="translate(-3 -3)" />
    <circle cx="32" cy="32" r="2.4" fill="#07101F" />
  </svg>
);
