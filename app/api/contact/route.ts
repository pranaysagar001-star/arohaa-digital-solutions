import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  businessName: string;
  email: string;
  serviceNeeded: string;
  message: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: (body.name ?? "").trim(),
      businessName: (body.businessName ?? "").trim(),
      email: (body.email ?? "").trim(),
      serviceNeeded: (body.serviceNeeded ?? "").trim(),
      message: (body.message ?? "").trim()
    };

    if (!payload.name || !payload.businessName || !payload.email || !payload.serviceNeeded || !payload.message) {
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "Email service is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS." },
        { status: 500 }
      );
    }

    const receiver = process.env.CONTACT_RECEIVER ?? "arohaadigitalsolutions@gmail.com";
    const from = process.env.SMTP_FROM ?? user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from,
      to: receiver,
      replyTo: payload.email,
      subject: `New lead: ${payload.name} | ${payload.serviceNeeded}`,
      text: [
        `Name: ${payload.name}`,
        `Business Name: ${payload.businessName}`,
        `Email: ${payload.email}`,
        `Service Needed: ${payload.serviceNeeded}`,
        "",
        "Message:",
        payload.message
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Business Name:</strong> ${payload.businessName}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Service Needed:</strong> ${payload.serviceNeeded}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send your request right now." }, { status: 500 });
  }
}
