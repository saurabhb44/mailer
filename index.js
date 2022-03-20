const { sendEmail } = require("./mailer/sendmail");
var express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/listUsers", function (req, res) {
  var { email, subject, text } = req.body;
  // console.log(req.body.email);

  try {
    sendEmail(email, subject, text);
    res.json({
      email,
      subject,
      text,
    });
    res.sendStatus(200, {
        email, subject, text
    });
  } catch {
    res.sendStatus(400);
  }
});

var server = app.listen(process.env.port || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});


// var text = "Hello there";
// var receiverEmail = "2017231@iiitdmj.ac.in";
// var subject = "I am subject";

// sendEmail(receiverEmail, subject, text);
