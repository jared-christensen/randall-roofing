const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const content = {
    to: "jared.christensen@gmail.com",
    from: "website@randallroofs.com",
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    if (error.response) {
      // Extract error msg
      const { message, code, response } = error;

      // Extract response msg
      const { headers, body } = response;

      console.error(body, process.env.SENDGRID_API_KEY);
    }
    res.status(400).send("Message not sent.");
  }
}
