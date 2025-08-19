This is a fullstack website for the AIUD BIKERS club, built with React (frontend) and Node.js/Express (backend), using MongoDB for data storage.
This project doesn't have a domain. It is just for testing

# Frontend
- Framework: React + Vite + TypeScript
- Styling: Tailwind CSS for fast, responsive design
- Effects/Animations:
Used Tailwind’s transition and animation utilities for smooth UI effects.
Custom animations for buttons, hover states, and section transitions.
- Map Component:
Interactive map with mouse zoom and pan.
Users can explore the club’s location visually.
- Components:
Navbar and Footer for layout
Hero, About, Events, Location, Contact sections
Logo and Map UI components
Forms for contact and newsletter subscription

# Backend
In the project root:

mkdir server
cd server
npm init -y
npm install express cors nodemailer

- Framework: Node.js + Express
- Database: MongoDB (with Mongoose)
- Features:
- API endpoints for contact form and newsletter subscription
- Stores submissions in MongoDB
- Sends emails using Nodemailer (configurable SMTP)
Structure:
All backend code is in the server folder

Adding MongoDB to this project so it can be store and view all messages and newsletter subscription:
- npm install mongoose

Creating new file: server/models.js

- the code:
-
---------------------------------------
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
---------------------------------------

Connect to MongoDB in the Server
At the top of index.js
---------------------------------------
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aiudbikers', { useNewUrlParser: true, useUnifiedTopology: true });
---------------------------------------


# How It Works
The frontend sends form data to the backend via HTTP POST requests.
The backend validates, stores, and (optionally) emails the data.
All submissions are viewable in MongoDB Compass.

# Running Locally
1 - Start MongoDB server
(e.g., run mongod in a terminal)
2 - Start backend

# commands: 

cd server
node index.js

3 - Start frontend

commands:

npm run dev

4 - Open the site in the browser
http://localhost:5173

# Customization
- Any component can be edited in the src/components folder.
- Map settings and effects can be tweaked in the Map component.
- Backend endpoints can be extended for more features.

