import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL,
    subject,
    text: message,
  });

  res.status(200).json({ success: true });
}