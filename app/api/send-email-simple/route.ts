import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();
    
    console.log('Received form data:', { firstName, lastName, email, subject });
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length);

    // Check if email credentials are properly configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { message: 'Email service not configured. Please check environment variables.' },
        { status: 500 }
      );
    }

    // Check if it's still the placeholder password
    if (process.env.EMAIL_PASS === 'your_16_character_app_password_here') {
      console.error('Email password is still placeholder');
      return NextResponse.json(
        { message: 'Email service not configured. Please set up Gmail App Password in .env.local file.' },
        { status: 500 }
      );
    }

    // Try different Gmail configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('Verifying email connection...');
    // Verify connection configuration
    await transporter.verify();
    console.log('Email connection verified successfully');

    // Email content
    const mailOptions = {
      from: `"Alien Protocol Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'alien.token.workspace@gmail.com',
      subject: `[Alien Protocol] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7C3AED;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #7C3AED;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This message was sent from the Alien Protocol contact form.
            </p>
          </div>
        </div>
      `,
    };

    console.log('Sending email...');
    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Invalid email credentials. Please check your Gmail App Password.';
      } else if (error.message.includes('Connection timeout')) {
        errorMessage = 'Connection timeout. Please check your internet connection.';
      } else if (error.message.includes('Authentication failed')) {
        errorMessage = 'Authentication failed. Please verify your Gmail App Password.';
      } else {
        errorMessage = `Email error: ${error.message}`;
      }
    }
    
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}

