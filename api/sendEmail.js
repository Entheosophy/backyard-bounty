// api/sendEmail.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Backyard Bounty <salsa@backyardbounty.shop>',
      to: ['salsa@backyardbounty.shop'],
      subject: `New Message from ${name}`,
      reply_to: email,
      text: message,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
