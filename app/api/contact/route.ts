import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to the recipient
    const recipientEmail = 'palagashviliniika@gmail.com';
    
    // Email sending implementation
    // Option 1: Using Resend (recommended for production)
    // Install: npm install resend
    // Then uncomment and configure:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@yourdomain.com',
      to: recipientEmail,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Option 2: Using Nodemailer (alternative)
    // Install: npm install nodemailer
    // Then uncomment and configure:
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || email,
      to: recipientEmail,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // For development/testing, log the email content
    // In production, replace this with actual email sending
    console.log('Contact form submission:', {
      to: recipientEmail,
      from: email,
      name,
      message,
    });
    
    // TODO: Replace console.log with actual email service in production

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
