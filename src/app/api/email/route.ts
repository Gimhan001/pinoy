import { Resend } from "resend";
const resend = new Resend("re_Zeu8otDi_GdjjgX8apQ2dWW9ntMpmBZCC");

export async function GET(request: Request) {
  return new Response("Test Email");
}

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    resend.emails.send({
      from: "info@pinoytravels.uk",
      to: "info@pinoytravels.uk",
      subject: body.subject,
      html: `<h3>CONTACT US</h3>
             <p>Name: ${body.fname}${" "}${body.lname}</p>
             <p>Email: ${body.from}</p>
             <p>Telephone Number: ${body.mobile}</p>
             <p>Message: ${body.message}</p>`,
    });

    return new Response("Successfully Sent the email");
  } catch (error) {
    console.log("Error: ", error);
    return new Response("Email not sent");
  }
}
