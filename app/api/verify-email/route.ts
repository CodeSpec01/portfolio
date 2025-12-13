import { createToken } from '@/utils/tokenAuth';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request : Request) {
    const { email } = await request.json();

    const token = await createToken(email);

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
            to: email,
            subject: 'Your Verification Code',
            text: `Your verification code is: ${token}\n\nCopy this entire string and paste it into the form.`,
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}