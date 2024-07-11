const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const twilioClient = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');

let verificationCode = '';

app.post('/api/send-code', (req, res) => {
  const { email, phoneNumber } = req.body;
  verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  if (email) {
    transporter.sendMail({
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Your Verification Code',
      text: `Your verification code is ${verificationCode}`,
    });
  }

  if (phoneNumber) {
    twilioClient.messages.create({
      body: `Your verification code is ${verificationCode}`,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: phoneNumber,
    });
  }

  res.sendStatus(200);
});

app.post('/api/verify-code', (req, res) => {
  const { code } = req.body;
  if (code === verificationCode) {
    res.sendStatus(200);
  } else {
    res.status(400).send('Invalid verification code');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
