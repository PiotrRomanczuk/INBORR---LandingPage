import { Resend } from 'resend';
import { EmailTemplate } from '../../kontakt/email/email-template';
import { NextResponse, NextRequest } from 'next/server';



export async function POST(req: NextRequest, res: NextResponse){
    
        res.headers.set('Access-Control-Allow-Origin', '*');
        res.headers.set('Access-Control-Allow-Methods', 'POST');
        res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
        
        const { email, content } = await req.json();
        console.log(email, content);
      
      if (!email || !content) {

          return NextResponse.json(
            { error: "Email and content are required fields" },
            { status: 400 });
        }
        
        const data = await resend.emails.send({
                from: "onboarding@resend.dev",
                to: [
                // 'bozena.b.rutkowska@gmail.com',
                'p.romanczuk@gmail.com',
                // 'jromanczuk@gmail.com',
            ],
                subject: 'Hello world',
                react: EmailTemplate(
                    {
                        firstName: email,
                        content: content,
                    }
                ),
                text: 'Hello world',
            });

            // console.log(data)
 
        return NextResponse.json({ data }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error });
        }
}


   