import { Resend } from 'resend';
const resend = new Resend('re_Zeu8otDi_GdjjgX8apQ2dWW9ntMpmBZCC');

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
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    return new Response('Successfully Sent the email')

  } catch (error) {
    console.log("Error: ", error)
    return new Response('Email not sent')
  }
}