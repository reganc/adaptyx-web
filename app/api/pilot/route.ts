import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PilotRequest = {
  name?: string;
  email?: string;
  role?: string;
  facility?: string;
  beds?: string;
  phone?: string;
  message?: string;
};

const TO = process.env.PILOT_TO ?? "regan@chorlog.com";
const FROM = process.env.PILOT_FROM ?? "Adaptyx Pilot <onboarding@resend.dev>";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let body: PilotRequest;
  try {
    body = (await req.json()) as PilotRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const role = (body.role ?? "").trim();
  const facility = (body.facility ?? "").trim();
  const beds = (body.beds ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !facility) {
    return NextResponse.json(
      { error: "Name, email, and facility are required" },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (name.length > 200 || facility.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const rows: ReadonlyArray<readonly [string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Role", role],
    ["Facility", facility],
    ["Approx. beds", beds],
    ["Phone", phone],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="margin:0 0 16px">New CareCore pilot request</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top"><strong>${escape(k)}</strong></td><td style="padding:6px 0">${escape(v)}</td></tr>`,
          )
          .join("")}
      </table>
      ${message ? `<h3 style="margin:24px 0 8px">Message</h3><div style="white-space:pre-wrap;font-size:14px;line-height:1.5">${escape(message)}</div>` : ""}
    </div>`;

  const text = [
    "New CareCore pilot request",
    "",
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    ...(message ? ["", "Message:", message] : []),
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Pilot request — ${facility}`,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
