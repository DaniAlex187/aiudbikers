const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aiudbikers', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { Contact, Newsletter } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Contact.create({ name, email, message });
    // ...nodemailer code...
    res.json({ success: true });
  } catch (error) {
    console.error(error); // <-- Add this line
    res.status(500).json({ success: false, error: error.message });
  }
});

// Newsletter subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    await Newsletter.create({ email });
    res.json({ success: true });
  } catch (error) {
    console.error(error); // <-- Add this line
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));