import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "abhner@abhner.com",
      to: "abhnerfelipe@hotmail.com",
      subject: "Portfolio Contact",
      html: "<h1>Hello World</h1>",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
