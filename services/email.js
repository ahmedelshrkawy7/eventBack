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
    //     html: `
    // <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Event Invitation</title>
    //     <style>
    //       /* Ensure fonts are applied across the email */
    //       @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

    //       body {
    //         margin: 0;
    //         padding: 0;
    //         font-family: "Roboto", sans-serif;
    //         width: 100%;
    //         background-color: #fff;
    //       }

    //       /* Basic email structure */
    //       .email-container {
    //         max-width: 600px;
    //         margin: 0 auto;
    //         background-color: #02bb5b;
    //         padding: 40px;
    //         border-radius: 20px;
    //         color: #fff;
    //       }

    //       .email-header {
    //         text-align: start;
    //         margin-bottom: 30px;
    //       }

    //       .email-header img {
    //         max-width: 200px;
    //         height: auto;
    //       }

    //       .event-background {
    //         width: 100%;
    //         height: auto;
    //         display: block;
    //         border-radius: 20px 20px 0 0;
    //       }

    //       .user-info {
    //         background-color: #fff;
    //         padding: 30px;
    //         color: #000;
    //         border-radius: 0 0 20px 20px;
    //       }

    //       .user-info h2,
    //       .user-info h3 {
    //         margin-bottom: 20px;
    //       }

    //       .user-info table {
    //         width: 100%;
    //         margin-top: 20px;
    //       }

    //       .user-info td {
    //         padding: 10px 0;
    //         vertical-align: middle;
    //       }

    //       .user-info img {
    //         width: 24px;
    //         height: 24px;
    //       }

    //       .email-footer {
    //         text-align: center;
    //         padding: 20px;
    //         font-size: 14px;
    //         background-color: #02bb5b;
    //         border-radius: 0 0 20px 20px;
    //         color: white;
    //       }

    //       /* Responsive styles */
    //       @media only screen and (max-width: 600px) {
    //         .email-container {
    //           padding: 20px;
    //         }

    //         .user-info {
    //           padding: 20px;
    //         }

    //         .email-footer {
    //           padding: 10px;
    //         }

    //         .user-info table {
    //           width: 100%;
    //         }

    //         .user-info td {
    //           display: block;
    //           width: 100%;
    //           text-align: center;
    //         }
    //       }
    //     </style>
    //   </head>
    //   <body>
    //     <div class="email-container">
    //       <!-- Header Section -->
    //       <div class="email-header">
    //         <img
    //           src="https://events.alexondev.net/assets/logo-white-DaBUC_Ur.png"
    //           alt="Event Logo"
    //           width="300px"
    //         />
    //       </div>
    //       <!-- Event Background Image -->
    //       <div
    //         style="
    //           height: 500px;
    //           background-image: url(https://events.alexondev.net/assets/back-Cgf2QjYU.jpg);
    //           background-size: cover;
    //           display: flex;
    //           align-items: start;
    //           flex-direction: column;
    //           justify-content: start;
    //           padding: 40px;
    //           border-radius: 20px 20px 0 0;
    //         "
    //       >
    //         <img
    //           src="https://events.alexondev.net/assets/logo3-D03vRJuf.png"
    //           width="350px"
    //           style="margin-top: 80px"
    //         />
    //       </div>

    //       <!-- User Information Section -->
    //       <div class="user-info">
    //         <div style="text-align: center">
    //           <h2>
    //             Thank you for registering for our upcoming event,<br />
    //             "ThinkAI & Beyond: The Future Intelligence"
    //           </h2>
    //           <h3 style="font-size: 16px; font-weight: normal">
    //             Taking place on 30th September 2024 at Mövenpick Hotel & Resort Al
    //             Bida’a. We are excited to have you join us for an engaging day where
    //             we will explore the transformative impact of artificial intelligence
    //             across various industries. Expect insightful discussions,
    //             cutting-edge presentations, and interactive sessions led by industry
    //             leaders and visionaries. This event will offer valuable insights
    //             into emerging trends and strategies as AI shapes the future of
    //             technology and innovation. We look forward to seeing you there!
    //           </h3>
    //         </div>

    //         <table cellpadding="0" cellspacing="0" border="0">
    //           <tr>
    //             <td>
    //               <div style="display: flex; align-items: center">
    //                 <div
    //                   style="
    //                     background-color: #e8f6e8;
    //                     height: 50px;
    //                     width: 50px;
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     border-radius: 50%;
    //                     padding: 10px;
    //                     margin-right: 10px;
    //                   "
    //                 >
    //                   <img
    //                     src="https://events.alexondev.net/iconsEmail/document-text.png"
    //                     alt=" "
    //                     style="width: 20px; height: 20px"
    //                   />
    //                 </div>
    //                 <div>
    //                   <div style="font-size: 14px">Full Name</div>
    //                   <div style="font-size: 18px; font-weight: 500">
    //                     ${userEmail.fullName}
    //                   </div>
    //                 </div>
    //               </div>
    //             </td>
    //             <td>
    //               <div style="display: flex; align-items: center">
    //                 <div
    //                   style="
    //                     background-color: #e8f6e8;
    //                     height: 50px;
    //                     width: 50px;
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     border-radius: 50%;
    //                     padding: 10px;
    //                     margin-right: 10px;
    //                   "
    //                 >
    //                   <img
    //                     src="https://events.alexondev.net/iconsEmail/sms.png"
    //                     alt=" "
    //                     style="width: 20px; height: 20px"
    //                   />
    //                 </div>
    //                 <div>
    //                   <div style="font-size: 14px">Email Address</div>
    //                   <div style="font-size: 18px; font-weight: 500">
    //                     ${userEmail.email}
    //                   </div>
    //                 </div>
    //               </div>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <div style="display: flex; align-items: center">
    //                 <div
    //                   style="
    //                     background-color: #e8f6e8;
    //                     height: 50px;
    //                     width: 50px;
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     border-radius: 50%;
    //                     padding: 10px;
    //                     margin-right: 10px;
    //                   "
    //                 >
    //                   <img
    //                     src="https://events.alexondev.net/iconsEmail/call.png"
    //                     alt=" "
    //                     style="width: 20px; height: 20px"
    //                   />
    //                 </div>
    //                 <div>
    //                   <div style="font-size: 14px">Phone Number</div>
    //                   <div style="font-size: 18px; font-weight: 500">
    //                     ${userEmail.phone}
    //                   </div>
    //                 </div>
    //               </div>
    //             </td>
    //             <td>
    //               <div style="display: flex; align-items: center">
    //                 <div
    //                   style="
    //                     background-color: #e8f6e8;
    //                     height: 50px;
    //                     width: 50px;
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     border-radius: 50%;
    //                     padding: 10px;
    //                     margin-right: 10px;
    //                   "
    //                 >
    //                   <img
    //                     src="https://events.alexondev.net/iconsEmail/buliding.png"
    //                     alt=" "
    //                     style="width: 20px; height: 20px"
    //                   />
    //                 </div>
    //                 <div>
    //                   <div style="font-size: 14px">Company Name</div>
    //                   <div style="font-size: 18px; font-weight: 500">
    //                     ${userEmail.CompanyName}
    //                   </div>
    //                 </div>
    //               </div>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <div style="display: flex; align-items: center">
    //                 <div
    //                   style="
    //                     background-color: #e8f6e8;
    //                     height: 50px;
    //                     width: 50px;
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     border-radius: 50%;
    //                     padding: 10px;
    //                     margin-right: 10px;
    //                   "
    //                 >
    //                   <img
    //                     src="https://events.alexondev.net/iconsEmail/briefcase.png"
    //                     alt=" "
    //                     style="width: 20px; height: 20px"
    //                   />
    //                 </div>
    //                 <div>
    //                   <div style="font-size: 14px">Job Title</div>
    //                   <div style="font-size: 18px; font-weight: 500">
    //                     ${userEmail.jobTitle}
    //                   </div>
    //                 </div>
    //               </div>
    //             </td>
    //           </tr>
    //         </table>
    //       </div>

    //       <!-- Footer Section -->
    //       <div class="email-footer" style="color: white; text-align: center">
    //         <p>
    //           Shuwaikh Industrial Area, Sun City Complex, Block A, Canada Dry St.,
    //           Kuwait
    //         </p>
    //         <p>sales@zakq8.com</p>
    //       </div>
    //     </div>
    //   </body>
    // </html>

    //     `,
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Invitation</title>
    <style>
      /* Ensure fonts are applied across the email */
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        width: 100%;
        background-color: #fff;
      }

      /* Basic email structure */
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #02bb5b;
        padding: 40px;
        border-radius: 20px;
        color: #fff;
      }

      .email-header {
        text-align: start;
        margin-bottom: 30px;
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
        padding: 30px;
        color: #000;
        border-radius: 0 0 20px 20px;
      }

      .user-info h2,
      .user-info h3 {
        margin-bottom: 20px;
      }

      .user-info table {
        width: 100%;
        margin-top: 20px;
      }

      .user-info td {
        padding: 10px 0;
        vertical-align: middle;
        text-align: center;
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
        color: white;
      }

      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .email-container {
          padding: 20px;
        }

        .user-info {
          padding: 20px;
        }

        .email-footer {
          padding: 10px;
        }

        .user-info table {
          width: 100%;
        }

        .user-info td {
          display: block;
          width: 100%;
          text-align: center;
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
          width="300px"
        />
      </div>
      <!-- Event Background Image -->
      <div
        style="
          height: 300px;
          background-image: url(https://events.alexondev.net/assets/back-Cgf2QjYU.jpg);
          background-size: cover;
          display: flex;
          align-items: start;
          flex-direction: column;
          justify-content: start;
          padding: 40px;
          border-radius: 20px 20px 0 0;
        "
      >
        <img
          src="https://events.alexondev.net/assets/logo3-D03vRJuf.png"
          width="350px"
          style="
            margin-top: 80px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: 100px;
          "
        />
      </div>

      <!-- User Information Section -->
      <div class="user-info">
        <div style="text-align: center">
          <h2>
            Thank you for registering for our upcoming event,<br />
            "ThinkAI & Beyond: The Future Intelligence"
          </h2>
          <h3 style="font-size: 16px; font-weight: normal">
            Taking place on 30th September 2024 at Mövenpick Hotel & Resort Al
            Bida’a. We are excited to have you join us for an engaging day where
            we will explore the transformative impact of artificial intelligence
            across various industries. Expect insightful discussions,
            cutting-edge presentations, and interactive sessions led by industry
            leaders and visionaries. This event will offer valuable insights
            into emerging trends and strategies as AI shapes the future of
            technology and innovation. We look forward to seeing you there!
          </h3>
        </div>

        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div
                  style="
                    background-color: #e8f6e8;
                    height: 50px;
                    width: 50px;
                    position: relative;

                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/document-text.png"
                    alt=" "
                    style="
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      margin-top: 15px;
                      left: 50%;
                    "
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Full Name</div>
                  <div style="font-size: 18px; font-weight: 500">
                    ${userEmail.fullName}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div
                  style="
                    background-color: #e8f6e8;
                    height: 50px;
                    width: 50px;
                    position: relative;

                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/sms.png"
                    alt=" "
                    style="
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      margin-top: 15px;
                      left: 50%;
                    "
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Email Address</div>
                  <div style="font-size: 18px; font-weight: 500">
                    ${userEmail.email}
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div
                  style="
                    background-color: #e8f6e8;
                    height: 50px;
                    width: 50px;
                    position: relative;

                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/call.png"
                    alt=" "
                    style="
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      margin-top: 15px;
                      left: 50%;
                    "
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Phone Number</div>
                  <div style="font-size: 18px; font-weight: 500">
                    ${userEmail.phone}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div
                  style="
                    background-color: #e8f6e8;
                    height: 50px;
                    width: 50px;
                    position: relative;

                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/buliding.png"
                    alt=" "
                    style="
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      margin-top: 15px;
                      left: 50%;
                    "
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Company Name</div>
                  <div style="font-size: 18px; font-weight: 500">
                    ${userEmail.CompanyName}
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div
                  style="
                    background-color: #e8f6e8;
                    height: 50px;
                    width: 50px;
                    position: relative;

                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                  "
                >
                  <img
                    src="https://events.alexondev.net/iconsEmail/briefcase.png"
                    alt=" "
                    style="
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      margin-top: 15px;
                      left: 50%;
                    "
                  />
                </div>
                <div>
                  <div style="font-size: 14px">Job Title</div>
                  <div style="font-size: 18px; font-weight: 500">
                    ${userEmail.jobTitle}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Footer Section -->
      <div class="email-footer">
        <p>
          Shuwaikh Industrial Area, Sun City Complex, Block A, Canada Dry St.,
          Kuwait
        </p>
        <p>sales@zakq8.com</p>
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
