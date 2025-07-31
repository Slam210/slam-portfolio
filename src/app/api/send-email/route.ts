// app/api/send-email/route.ts
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}
const resend = new Resend(apiKey);
export async function POST(req: Request) {
  const { senderEmail, subject, message } = await req.json();

  // Validate required fields
  if (!senderEmail || !message) {
    return Response.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(senderEmail)) {
    return Response.json(
      { success: false, error: "Invalid email format" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      replyTo: senderEmail,
      to: process.env.CONTACT_EMAIL || "default@example.com",
      subject: subject || "No subject",
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
