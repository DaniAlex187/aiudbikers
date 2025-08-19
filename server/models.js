const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const newsletterSchema = new mongoose.Schema({
  email: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = { Contact, Newsletter };
