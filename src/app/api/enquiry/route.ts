import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    resend.emails.send({
      from: "info@pinoytravels.uk",
      to: "info@pinoytravels.uk",
      subject: `${body.content} From ${body.from} to ${body.to} Flights`,
      html: `<h3>${body.content}</h3>
             <p>Name: ${body.fname}</p>
             <p>Email: <a href="mailto:${body.email}">${body.email}</a></p>
             <p>Telephone Number: <a href="tel:${body.mobile}">${body.mobile}</a></p>
             <h4>${body.content} Details</h4>
             <p>Trip Type: ${body.tripType}</p>
             <p>Departure Airport: ${body.departureAirport}</p>
             <p>Destination Airport: ${body.destinationAirPort}</p>
             <p>Departure Date: ${body.departureDate}</p>
             <p>Return Date: ${body.returnsDate}</p>
             <p>Price Per Person : ${body.price}</p>
             <p>Air Line: ${body.airLine}</p>
             <p>Cabin Class: ${body.cabinClass}</p>
             <p>Adults : ${body.adults}</p>
             <p>Childrens : ${body.childrens}</p>
             <p>Infants : ${body.infants}</p>
             `,
    });

    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
