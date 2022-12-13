import nodemailer from "nodemailer";

const sendEmailHandler = (email, body) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.emailUserId,
      pass: process.env.emailPassword,
    },
  });

  const options = {
    from: "orlyteam@outlook.com",
    to: email,
    subject: "Thank you for reaching out",
    html: `<p>${body}</p>`,
  };

  transporter.sendMail(options, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent");
  });
};

export default sendEmailHandler;
