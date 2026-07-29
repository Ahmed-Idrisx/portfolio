import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

// Escapes user input before it's interpolated into the email HTML
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // server side validation
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const { name, email, message } = result.data;

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Missing environment variables.");
      return NextResponse.json(
        {
          success: false,
          message: "Server is not configured to send email yet.",
        },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Portfolio new message from ${name}`,
      replyTo: email,

      html: `
      <div style="font-family:Arial;padding:20px">
        <h2>📩 New Portfolio Message</h2>
 
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
 
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
 
        <p><strong>Message:</strong></p>
 
        <div style="padding:15px;border:1px solid #ddd;border-radius:8px">
          ${escapeHtml(message).replace(/\n/g, "<br/>")}
        </div>
      </div>
      `,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send message." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
