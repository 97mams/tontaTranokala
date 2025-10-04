import { getUser } from "@/lib/auth-server";
import { Resend } from "resend";
import MagicLinkEmail from "../../../emails/magiv-link";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const user = await getUser();
  try {
    const { data, error } = await resend.emails.send({
      from: "totanTanokala <97mams@resend.dev>",
      to: [String(user?.email)],
      subject: "Hello world",
      react: MagicLinkEmail(
        { magicLink: "localhost:3000" },
        String(user?.name)
      ),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
