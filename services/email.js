const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "events.zak.solutions@gmail.com", // Replace with your email
    pass: "xdgc dxes sacb fwdb", // Replace with your email password (or use an app password)
  },
});

const sendConfirmationEmail = (userEmail, confirmationLink) => {
  const mailOptions = {
    from: "ahmadelshrkawy232@gamil.com", // Sender's email address
    to: userEmail.email, // Recipient's email address
    subject: "Email Confirmation",
    html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Invitation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <style>
      /* Basic email styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        background-color: #fff;
        padding: 20px;
      }

      .email-container {
        max-width: 100%;
        background-color: #02bb5b;
        padding: 80px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 20px 20px 0 0;
        color: #fff;
      }

      .email-header {
        text-align: left;
        color: #000000;
      }

      .email-header img {
        max-width: 200px;
        height: auto;
      }

      .event-background {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 20px 20px 0 0;
      }

      .user-info {
        background-color: #fff;
        padding: 60px;
        color: #000;
        border-radius: 0 0 20px 20px;
      }

      .user-info h2,
      .user-info h3 {
        margin-bottom: 20px;
      }

      .user-info table {
        width: 100%;
        margin-top: 40px;
      }

      .user-info td {
        padding: 20px 0;
        vertical-align: middle;
      }

      .user-info img {
        width: 24px;
        height: 24px;
      }

      .email-footer {
        text-align: center;
        padding: 20px;
        font-size: 14px;
        background-color: #02bb5b;
        border-radius: 0 0 20px 20px;
      }

      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        body {
          padding: 0 10px;
        }

        .email-container {
          padding: 40px 20px;
        }

        .user-info {
          padding: 40px 20px;
        }

        .user-info table td {
          display: block;
          width: 100%;
          text-align: center;
          padding: 10px 0;
        }

        .email-footer {
          display: block;
          text-align: center;
          gap: 0;
          border-radius: 0 0 20px 20px;
        }

        .email-footer p {
          margin-bottom: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header Section -->
      <div class="email-header">
        <img
          src="https://events.alexondev.net/assets/logo-white-DaBUC_Ur.png"
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
        <div style="text-align: center">
          <h2>Thank you for confirming your booking for the event.</h2>
          <h3>We look forward to welcoming you soon!</h3>
        </div>

        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    background-color: #e8f6e8;
                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/document-text.png"
                    alt=" "
                    style="width: 20px; height: 20px"
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Full Name</div>
                  <div style="font-size: 18px; font-weight: 500">
                    Ahmed Elshrkawy
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    background-color: #e8f6e8;
                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="	https://events.alexondev.net/iconsEmail/document-text.png"
                    alt=" "
                    style="width: 20px; height: 20px"
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Email Address</div>
                  <div style="font-size: 18px; font-weight: 500">
                    Ahmed@yahoo.com
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    background-color: #e8f6e8;
                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/call.png"
                    alt=" "
                    style="width: 20px; height: 20px"
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Phone Number</div>
                  <div style="font-size: 18px; font-weight: 500">
                    +9666134685
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    background-color: #e8f6e8;
                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/buliding.png"
                    alt=" "
                    style="width: 20px; height: 20px"
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Company Name</div>
                  <div style="font-size: 18px; font-weight: 500">Alexon.co</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="display: flex; align-items: center">
                <div
                  style="
                    background-color: #e8f6e8;
                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                    text-align: center;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/briefcase.png"
                    alt=" "
                    style="width: 20px; height: 20px"
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Job Title</div>
                  <div style="font-size: 18px; font-weight: 500">
                    Software Developer
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Footer Section -->
    <div
      class="email-footer"
      style="color: white; display: inline-block; width: 100%"
    >
      <p>
        Shuwaikh Industrial Area, Sun City Complex, Block A, Canada Dry St.,
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
