const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "ahmadelshrkawy232@gmail.com", // Replace with your email
    pass: "monf bmap rany aukn", // Replace with your email password (or use an app password)
  },
});

const sendConfirmationEmail = (userEmail, confirmationLink) => {
  const mailOptions = {
    from: "ahmadelshrkawy232@gamil.com", // Sender's email address
    to: userEmail, // Recipient's email address
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
        background-color: #f4f4f4;
      }

      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border: 1px solid #dddddd;
      }

      .email-header,
      .email-footer {
        background-color: #04172a;
        color: #ffffff;
        text-align: center;
        padding: 20px;
      }

      .email-header img {
        max-width: 200px;
        height: auto;
      }

      .email-body {
        padding: 20px;
        text-align: center;
      }

      .email-body img {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }

      .email-body h1 {
        font-size: 24px;
        color: #333333;
      }

      .email-body p {
        font-size: 16px;
        color: #555555;
        line-height: 1.5;
      }

      .agenda-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }

      .agenda-table th,
      .agenda-table td {
        padding: 12px;
        border: 1px solid #dddddd;
        text-align: left;
      }

      .agenda-table th {
        background-color: #f7f7f7;
      }

      .button {
        background-color: #02bb5b;
        color: #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        display: inline-block;
      }

      .footer-text {
        font-size: 12px;
        color: #ffffff;
        text-align: center;
      }

      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .email-container {
          width: 100% !important;
        }

        .email-body {
          padding: 10px !important;
        }

        .email-body h1 {
          font-size: 20px;
        }

        .email-body p {
          font-size: 14px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <img
          src="https://events.alexondev.net/assets/SiteLogo-8mHirAuN.png"
          alt="Event Logo"
        />
      </div>

      <div class="email-body">
        <img
          src="https://events.alexondev.net/assets/back-Cgf2QjYU.jpg"
          alt="Event Background"
          style="width: 100%; height: auto"
        />
        <h1>Think AI & Beyond:<br />The Future Intelligence</h1>
        <p>
          We are delighted to invite you to our upcoming event, "Think AI &
          Beyond: The Future Intelligence", set to take place on 30th September
          2024 at Mövenpick Hotel & Resort Al Bida’a. Join us for an engaging
          day filled with insightful discussions, cutting-edge presentations,
          and interactive sessions.
        </p>
        <h5>21/09/2024 - 09:00 pm</h5>

        <div>
          <h2>Event Agenda</h2>
          <table class="agenda-table">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Activity</th>
            </tr>
            <tr>
              <td>9:30 am</td>
              <td>10:00 am</td>
              <td>Arrival, Networking and Welcome Coffee</td>
            </tr>
            <tr>
              <td>10:00 am</td>
              <td>10:15 am</td>
              <td>Welcome Note</td>
            </tr>
            <tr>
              <td>10:15 am</td>
              <td>11:30 am</td>
              <td>Transformative Solutions for the Digital Age</td>
            </tr>
            <tr>
              <td>11:30 am</td>
              <td>12:00 pm</td>
              <td>Coffee Break</td>
            </tr>
            <tr>
              <td>12:00 pm</td>
              <td>12:45 pm</td>
              <td>Optimizing Service Excellence in the Digital Era</td>
            </tr>
            <tr>
              <td>12:45 pm</td>
              <td>1:00 pm</td>
              <td>Luck Draw</td>
            </tr>
            <tr>
              <td>1:00 pm</td>
              <td>Onwards</td>
              <td>Lunch</td>
            </tr>
          </table>

          <a href="#" class="button">Confirm Now</a>
        </div>
      </div>

      <div class="email-footer">
        <p class="footer-text">
          Shuwaikh Industrial Area, Sun City Complex, Block A Canada Dry St.,
          Kuwait
          <br />
          sales@zakq8.com
        </p>
      </div>
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
