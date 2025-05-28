// pages/api/sendEmail.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Backyard Bounty <salsa@backyardbounty.shop>',
      to: ['salsa@backyardbounty.shop'],
      subject: `New Contact from ${name}`,
      reply_to: email,
      text: message,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
