import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email/email-template';


import { NextResponse, NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({
    body: { name, content, email } }:
    { body: { name: string, content: string, email: string } }) {
    try {
        console.log(name, content, email)

            const data = await resend.emails.send({
                from: email,
                to: ['p.romanczuk@gmail.com'],
                subject: 'Hello world',
                react: EmailTemplate(
                    {
                        firstName: name,
                        content: content
                    }
                ),
                text: 'Hello world',
            });

            return NextResponse.json(data);
        } catch (error) {
            return NextResponse.json({ error });
        }
}
