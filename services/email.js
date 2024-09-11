const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  port: 587,
  secure: false,
  auth: {
    user: "events.zak.solutions@gmail.com", // Replace with your email
    pass: "xdgc dxes sacb fwdb", // Replace with your email password (or use an app password)
  },
});

const sendConfirmationEmail = (userEmail, confirmationLink) => {
  const mailOptions = {
    from: "events.zak.solutions@gmail.com", // Sender's email address
    to: userEmail.email, // Recipient's email address
    subject: "Email Confirmation",
    html: `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Invitation</title>
    <style>
      /* Basic email styles */
      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        background-color: #02bb5b; /* Full-page background green */
      }

      .email-container {
        max-width: 85%;
        margin: 40px auto; /* Added margin for better spacing */
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
      }

      .email-header {
        text-align: center;
        color: #000000;
        padding: 0;
      }

      .email-header img {
        max-width: 200px;
        height: auto;
      }

      .event-background {
        width: 100%;
        height: auto;
        display: block;
      }

      .user-info {
        margin-top: 20px;
        color: #000000;
      }

      .user-info table {
        width: 100%;
      }

      .user-info td {
        padding: 10px;
        vertical-align: middle;
      }

      .user-info img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 10px;
      }

      .email-footer {
        text-align: center;
        color: #ffffff;
        padding: 20px;
        background-color: #02bb5b;
        font-size: 14px;
      }

      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .email-container {
          width: 100% !important;
          padding: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header Section -->
      <div class="email-header">
        <img
          src="https://events.alexondev.net/assets/SiteLogo-8mHirAuN.png"
          alt="Event Logo"
        />
      </div>
      <!-- Event Background Image -->
      <img
        src="https://events.alexondev.net/assets/back-Cgf2QjYU.jpg"
        alt="Event Background"
        class="event-background"
      />

      <!-- User Information Section -->
      <div class="user-info">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt="User Icon"
              />
              <strong>Full Name:</strong> ${userEmail.fullName}
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email Icon"
              />
              <strong>Email Address:</strong> ${userEmail.email}
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone Icon"
              />
              <strong>Phone Number:</strong> ${userEmail.phone}
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
                alt="Company Icon"
              />
              <strong>Company Name:</strong> ${userEmail.companyName}
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt="Job Icon"
              />
              <strong>Job Title:</strong> ${userEmail.jobTitle}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- Footer Section -->
    <div class="email-footer">
      <p>
        Shuwaikh Industrial Area, Sun City Complex, Block A Canada Dry St.,
        Kuwait
      </p>
      <p>sales@zakq8.com</p>
    </div>
  </body>
</html>
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
