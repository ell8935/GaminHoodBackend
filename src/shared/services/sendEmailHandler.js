import nodemailer from "nodemailer";
import "dotenv/config";

const sendEmailHandler = (email, body) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_USER_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const options = {
    from: "orlyteam@outlook.com",
    to: "ell8935@gmail.com",
    subject: `Thank you for reaching out ${email}`,
    html: `<p>${email}////////${body}</p>`,
  };

  transporter.sendMail(options, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Sent from ${options.to}`);
  });
};

export default sendEmailHandler;
