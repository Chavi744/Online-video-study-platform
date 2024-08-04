const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');
const CalendarEvent = require('../models/calendarEvent');
const Forum = require('../models/forum');
const Notification = require('../models/notification');
const Feedback = require('../models/feedback');

// מסלול לשליחת הודעת צ'אט
router.post('/chat/send', async (req, res) => {
  const { courseId, message } = req.body;

  const newMessage = new Chat({
    courseId,
    message,
    timestamp: new Date()
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// מסלול להוספת תזכורת ללוח שנה
router.post('/calendar/add', async (req, res) => {
  const { courseId, date, reminder } = req.body;

  const newEvent = new CalendarEvent({
    courseId,
    date,
    reminder
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// מסלול לקבלת תוצאות חיפוש
router.get('/search', async (req, res) => {
  const { courseId, query } = req.query;

  // חיפוש לפי נושאים, משימות או תאריכים
  // לדוגמה: חיפוש ב-DB (תנאים מותאמים אישית)
  try {
    const results = await SomeModel.find({
      courseId,
      $text: { $search: query }
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// מסלול להוספת הודעה לפורום
router.post('/forum/add', async (req, res) => {
  const { courseId, message } = req.body;

  const newForumMessage = new Forum({
    courseId,
    message,
    timestamp: new Date()
  });

  try {
    const savedForumMessage = await newForumMessage.save();
    res.status(201).json(savedForumMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// מסלול לקבלת התראות
router.get('/notifications', async (req, res) => {
  const { courseId } = req.query;

  const notifications = await Notification.find({ courseId });

  res.status(200).json(notifications);
});

// מסלול להוספת משוב
router.post('/feedback/add', async (req, res) => {
  const { courseId, feedback } = req.body;

  const newFeedback = new Feedback({
    courseId,
    feedback,
    timestamp: new Date()
  });

  try {
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const nodemailer = require('nodemailer');

// פונקציה לשליחת מייל
const sendEmailNotification = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: subject,
    text: text
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Error sending email:', err.message);
  }
};

module.exports = router;
