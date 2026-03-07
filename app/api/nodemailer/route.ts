import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { FormSchema } from "@/app/kontakt/form/FormSchema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation
    const result = FormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, phone, message } = result.data;

    await sendFormMessage({ firstName, lastName, email, phone, message });

    return NextResponse.json(
      { success: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

async function sendFormMessage({
  firstName,
  lastName,
  email,
  phone,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!process.env.MAILGUN_API_KEY) {
    throw new Error(
      "MAILGUN_API_KEY is not configured in environment variables",
    );
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const emailContent = `
    New Contact Form Submission:

    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}

    Message:
    ${message}
  `;

  await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
    from: `Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
    to: [process.env.RECIPIENT_EMAIL || ""],
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: emailContent,
  });
}
