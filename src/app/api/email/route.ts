import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  return new Response('Test Email')
}


export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    resend.emails.send({
      from: 'info@pinoytravels.uk',
      to: 'info@pinoytravels.uk',
      subject: body.subject,
      html: body.message
    });

    return new Response('Successfully Sent the email')

  } catch (error) {
    console.log("Error: ", error)
    return new Response('Email not sent')
  }
}