const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "", // Replace with your email
    pass: "", // Replace with your email password (or use an app password)
  },
});

const sendConfirmationEmail = (userEmail, confirmationLink) => {
  const mailOptions = {
    from: "ahmadelshrkawy232@gamil.com", // Sender's email address
    to: userEmail, // Recipient's email address
    subject: "Email Confirmation",
    html: `
      <h1>Email Confirmation</h1>
      <p>Thank you for registering. Please confirm your email by clicking the link below:</p>
      <a href="${confirmationLink}">Confirm Email</a>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendConfirmationEmail;
