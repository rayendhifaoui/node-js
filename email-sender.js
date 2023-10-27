const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rguez2@gmail.com",
    pass: "blabla",
  },
});

const mailOptions = {
  from: "rguez2@gmail.com",
  to: "rguez@gmail.com",
  subject: "Test email",
  text: "This is a test email sent from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email", error);
  } else {
    console.log("Email sent", info.response);
  }
});
