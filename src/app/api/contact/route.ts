import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate input
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Send email using Resend
        try {
            const data = await resend.emails.send({
                from: 'Contact Form <contact@ustoola.resend.app>',
                to: 'wiraphat.makwong@gmail.com',
                replyTo: email,
                subject: `Contact Form: ${subject}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
              <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; color: #667eea;">From:</div>
                <div style="margin-top: 5px; padding: 10px; background: white; border-radius: 4px;">${name}</div>
              </div>
              <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; color: #667eea;">Email:</div>
                <div style="margin-top: 5px; padding: 10px; background: white; border-radius: 4px;"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; color: #667eea;">Subject:</div>
                <div style="margin-top: 5px; padding: 10px; background: white; border-radius: 4px;">${subject}</div>
              </div>
              <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; color: #667eea;">Message:</div>
                <div style="margin-top: 5px; padding: 10px; background: white; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                <p>This email was sent from your website contact form.</p>
              </div>
            </div>
          </div>
        `,
            });

            console.log('Email sent successfully:', data);

            return NextResponse.json({
                success: true,
                message: 'Message sent successfully! I\'ll get back to you soon.',
            });

        } catch (emailError: unknown) {
            console.error('Resend error:', emailError);

            return NextResponse.json(
                {
                    error: emailError instanceof Error ? emailError.message : 'Failed to send email. Please try again or contact me directly.',
                    details: emailError instanceof Error ? emailError.stack : 'Unknown error'
                },
                { status: 500 }
            );
        }

    } catch (error: unknown) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
