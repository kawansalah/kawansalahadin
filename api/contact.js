const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Create a transporter using SendGrid
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDGRID_API_KEY
        }
      });

      // Email content with proper headers
      const mailOptions = {
        from: {
          name: 'Kawan Salahadin Contact Form',
          address: process.env.SENDER_EMAIL
        },
        to: 'kawansalahadin@gmail.com',
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a192f; color: #8892b0; padding: 30px;">
            <h2 style="color: #64ffda; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: #112240; padding: 25px; border-radius: 8px; border: 1px solid #233554;">
              <p style="margin: 10px 0;"><span style="color: #64ffda;">Name:</span> ${name}</p>
              <p style="margin: 10px 0;"><span style="color: #64ffda;">Email:</span> ${email}</p>
              <p style="margin: 10px 0;"><span style="color: #64ffda;">Message:</span></p>
              <div style="background-color: #1e3a5f; padding: 20px; border-radius: 5px; margin-top: 15px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        `,
        headers: {
          'X-Sender': process.env.SENDER_EMAIL,
          'X-Reply-To': email,
          'X-Mailer': 'Contact Form',
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'high',
          'List-Unsubscribe': `<mailto:${process.env.SENDER_EMAIL}?subject=unsubscribe>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
        }
      };

      // Send email
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}; 