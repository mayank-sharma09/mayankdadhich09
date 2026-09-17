import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "dadhichmayank09@gmail.com",
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}