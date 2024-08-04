const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const courseMaterial = require('./models/courseMaterials'); // ייבוא הסכמה
const ForumPost  = require('./models/ForumPost');
const PracticeMaterial = require('./models/practiceMaterials'); // ייבוא הסכמה
const activityMaterials = require('./models/activityMaterials'); // ייבוא הסכמה
const user = require('./models/user'); // ייבוא המודל של המשתמש
// const { getUserData } = require('../services/userService');

const app = express();
const PORT = 5000;

// התחלת השרת
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// קישור ל-MongoDB (השתמש ב-URL המתאים לך)
mongoose.connect('mongodb://localhost:27017/courseMaterialsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

// נתיב לקבלת חומרי התרגולים
app.get('/api/practice-materials', async (req, res) => {
  try {
    const materials = await PracticeMaterial.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching practice materials', error });
  }
});

// נתיב לקבלת חומרי הקורס
app.get('/api/course-materials', async (req, res) => {
  try {
    const materials = await CourseMaterial.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course materials', error });
  }
});

// נתיב לקבלת חומרי קורס לפי degreeId ו-courseId
app.get('/api/course-materials/:degreeId/:courseId', async (req, res) => {
  try {
    const { degreeId, courseId } = req.params;
    const courseMaterial = await CourseMaterial.findOne({ degreeId: parseInt(degreeId), courseId: parseInt(courseId) });

    if (courseMaterial) {
      res.json(courseMaterial);
    } else {
      res.status(404).json({ message: 'Course material not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course material', error });
  }
});

// נתיב לקבלת חומרי הפעילויות
app.get('/api/activity-materials', async (req, res) => {
  try {
    const activities = await ActivityMaterial.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity materials', error });
  }
});

// נתיב לקבלת כל ההודעות בפורום לקורס מסוים
app.get('/api/forum/', async (req, res) => {
  try {
    const { courseId } = req.params;
    const posts = await ForumPage.find({ courseId: parseInt(courseId) });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching forum posts', error });
  }
});

// נתיב לפרסום הודעה חדשה בפורום
app.post('/api/forum/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { author, title, content } = req.body;
    const newPost = new ForumPost({ courseId, author, title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating new forum post', error });
  }
});

app.get('/api/user-data/:email', async (req, res) => {
  try {
    const user = await user.findOne({ email: req.params.email });
    res.json(user);
  } catch (error) {
    res.
  
status(500).json({ message: 'Error fetching user data', error });
  }
});

// פונקציה ליצירת משתמש עם רמת מוטיבציה גבוהה
const createHighMotivationUser = async () => {
  try {
    
    
const newUser = new user({
      name: 'John Doe',
      email: 'john.doe@example.com',
      motivation: 9, // רמת מוטיבציה גבוהה
      grades: [
        { course: 'Intro to CS', grade: 90 },
        { course: 'Data Structures', grade: 85 },
      ],
    });

    await newUser.save();
    console.log('User with high motivation created:', newUser);
  } 
 
catch (error) {
    console.error('Error creating high motivation user:', error);
  }
};

// קריאה לפונקציה על מנת להוסיף את המשתמש עם רמת המוטיבציה הגבוהה

createHighMotivat
createHighMotivationUser();