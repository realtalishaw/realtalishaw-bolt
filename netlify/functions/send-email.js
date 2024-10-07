const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message, type } = JSON.parse(event.body);

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    if (type === 'contact') {
      // Send contact form email
      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: 'misstalishawhite@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });
    } else if (type === 'subscribe') {
      // Send subscription confirmation email
      await transporter.sendMail({
        from: `"Newsletter Subscription" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Welcome to Talisha White\'s Newsletter',
        text: `Thank you for subscribing to my newsletter!`,
        html: `<h1>Welcome!</h1><p>Thank you for subscribing to my newsletter!</p>`,
      });

      // Send notification to admin
      await transporter.sendMail({
        from: `"Newsletter Subscription" <${process.env.EMAIL_USER}>`,
        to: 'misstalishawhite@gmail.com',
        subject: 'New Newsletter Subscription',
        text: `New subscriber: ${email}`,
        html: `<p>New subscriber: ${email}</p>`,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};