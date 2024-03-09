import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// import thanksForYourEmail from  '../../emailTemplates/thanksForYourEmail';
import contactUsEmail from  '../../emailTemplates/contactUsEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { category, username, email, message } = await request.json();

    try {
        await resend.emails.send({
            from: process.env.MAIL_FROM || '',
            to: email,
            subject: 'You have received message from ContactUs form regarding '+{category},
            react: contactUsEmail({
                category,
                username,
                email,
                message
            })
        });
        return NextResponse.json({
            status: 'Ok'
        }, {
            status: 200
        })
    } catch(e: unknown) {
        if (e instanceof Error) {
            console.log(`Failed to send email: ${e.message}`);
        }
        return NextResponse.json({
            error: 'Internal server error.'
        }, {
            status: 500
        })
    }
}