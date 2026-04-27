import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareCore by Adaptyx — The operating layer for skilled nursing",
  description:
    "CareCore is the AI operating layer for skilled nursing facilities. It sits alongside your existing systems and quietly keeps documentation, tasks, and compliance from slipping — shift after shift.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
