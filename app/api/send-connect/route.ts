import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { verifyToken } from '@/utils/tokenAuth';

export async function POST(request : Request) {
  const { token, message } = await request.json();
  
  if (!token) {
    return NextResponse.json({ error: "Invalid or Expired Code" }, { status: 401 });
  }

  // 1. Verify the Token
  const payload = await verifyToken(token);
  
  if (!payload) {
    return NextResponse.json({ error: "Invalid or Expired Code" }, { status: 401 });
  }

  const userEmail = payload.email as string; // Extracted safely from the token

  // 2. Send the ACTUAL message to YOU
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_EMAIL_ADDRESS,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GOOGLE_EMAIL_ADDRESS,
      to: process.env.GOOGLE_EMAIL_ADDRESS, // Send to YOURSELF
      subject: `New Feedback from ${userEmail}`,
      text: message,
    });

    await transporter.sendMail({
      from: process.env.GOOGLE_EMAIL_ADDRESS,
      to: userEmail, // Send to YOURSELF
      subject: `Message Received`,
      text: ` Thank you for your message! We have received your feedback and will get back to you shortly.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send feedback' }, { status: 500 });
  }
}