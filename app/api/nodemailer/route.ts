import { NextRequest, NextResponse } from "next/server";

import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import { CloudCog } from "lucide-react";


const nodemailer = require("nodemailer");

export async function GET(req: NextRequest) {
  try {
    console.log("Sending email...");
    await sendSimpleMessage();
    return NextResponse.json(
      { success: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json({
        error: `Internal Server Error: ${error.message}`,
      });
    }
    return NextResponse.json({
      error: "Internal Server Error",
    });
  }
}


async function sendSimpleMessage() {
  if (!process.env.MAILGUN_API_KEY) {
    throw new Error("MAILGUN_API_KEY is not configured in environment variables");
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  try {
    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: [process.env.RECIPIENT_EMAIL || ""],
      subject: "Hello",
      text: "Test email from Mailgun",
    });
    console.log(data);
  } catch (error) {
    console.error("Mailgun API Error:", error);
    throw error; // Re-throw to be caught by the main handler
  }
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();
    
    await sendFormMessage({
      firstName,
      lastName,
      email,
      phone,
      message
    });
    
    return NextResponse.json(
      { success: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}


async function sendFormMessage({
  firstName,
  lastName,
  email,
  phone,
  message
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!process.env.MAILGUN_API_KEY) {
    throw new Error("MAILGUN_API_KEY is not configured in environment variables");
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

  try {
    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `Contact Form <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: [process.env.RECIPIENT_EMAIL || ""],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: emailContent,
    });
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Mailgun API Error:", error);
    throw error;
  }
}