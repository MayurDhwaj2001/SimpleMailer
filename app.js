const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
// const bool = 0;
const app = express();
app.use(express.static("css"));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const msg = req.body.message;
  //   const popup = document.getElementById("popup");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dhwajmayur00@gmail.com",
      pass: "gbjvdivmfgbsyejg",
    },
  });

  const mailOptions = {
    from: "dhwajmayur00@gmail.com",
    to: email,
    cc: "dhwajmayur00@gmail.com",
    subject: "Thanks for giving feedback " + name,
    text: "You sent " + msg,
  };

  //   function send() {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      //   bool = 1;
      //   popup.style.display = "flex";

      res.redirect("/");
    }
  });
  //   }
});

app.listen(3000, function () {
  console.log("server started at 3000");
});
