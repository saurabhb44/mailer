var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saurabhbhardwaj379@gmail.com",
    pass: "iamgodofhell1",
  },
});

function sendEmail(toEmail, subject, body) {
  const mailOptions = {
    from: "saurabhbhardwaj379@gmail.com", // sender address
    to: toEmail, // list of receivers
    subject: subject, // Subject line
    html: body, // plain text body
    attachments: [
      {
          filename: 'shiro.jpeg',
          path: __dirname + '/shiro.jpeg'
      }
  ]
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}

module.exports = { sendEmail };
