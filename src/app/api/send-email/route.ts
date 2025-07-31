// app/api/send-email/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { senderEmail, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: `${senderEmail} <onboarding@resend.dev>`,
      to: "stevenl.inbox@gmail.com",
      subject: subject || "No subject",
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
