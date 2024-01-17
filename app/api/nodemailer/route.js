const nodemailer = require("nodemailer");

export async function POST(req, res) {
  try {
    if (req.method === "POST") {
      // Check if req.body is present
      if (!req.body) {
        return res.status(400).json({
          error: "Bad Request: Missing request body",
        });
      }

      const body = await req.json();

      const message = {
        from: body.email,
        to: "p.romanczuk@gmail.com",
        text: body.message,
        html: `<p>${body.message}</p>`,
      };

      console.log("Message is:");
      console.log(message);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_EMAIL_ADDRESS,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      //   console.log(transporter);

      const info = await transporter.sendMail(message);

      console.log(info);

      return res.status(200).json({
        success: `Message delivered to ${info.accepted.join(", ")}`,
      });
    } else {
      return res.status(405).json({
        error: "Method Not Allowed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error: ${error.message}`,
    });
  }
}
