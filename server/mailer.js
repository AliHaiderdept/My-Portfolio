import nodemailer from "nodemailer";

let transporter = null;

/**
 * SMTP settings optional hain. Agar env me na houn to email skip ho jata hai
 * aur message sirf database me save hota hai.
 */
export function getTransporter() {
  if (transporter !== null) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    transporter = false;
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT || 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  return transporter;
}

export async function sendContactMail(doc) {
  const tx = getTransporter();
  if (!tx) return { skipped: true };

  await tx.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || process.env.SMTP_USER,
    replyTo: doc.email,
    subject: `New portfolio message from ${doc.name}`,
    text: [
      `Name:    ${doc.name}`,
      `Email:   ${doc.email}`,
      `File:    ${doc.fileName || "-"}`,
      "",
      doc.message
    ].join("\n")
  });

  return { skipped: false };
}
