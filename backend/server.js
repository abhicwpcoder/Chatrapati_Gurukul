import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import instituteData from './data/instituteData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://your-frontend-domain.vercel.app' // Replace with your Vercel URL
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Origin not allowed:', origin);
      callback(null, true); // Allow temporarily for testing
      // callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use('/Images', express.static(path.join(__dirname, 'public/Images')));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/courses', (req, res) => {
  res.json(instituteData.courses);
});

app.get('/api/faculty', (req, res) => {
  res.json(instituteData.faculty);
});

app.get('/api/gallery', (req, res) => {
  res.json(instituteData.gallery);
});

app.get('/api/results', (req, res) => {
  res.json(instituteData.results);
});

app.get('/api/testimonials', (req, res) => {
  res.json(instituteData.testimonials);
});

app.get('/api/faq', (req, res) => {
  res.json(instituteData.faq);
});

app.get('/api/stats', (req, res) => {
  res.json(instituteData.stats);
});

app.get('/api/hostel/boys', (req, res) => {
  res.json(instituteData.boysHostel);
});

app.get('/api/hostel/girls', (req, res) => {
  res.json(instituteData.girlsHostel);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, subject } = req.body;
  
  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER || 'abhijeetdepale45@gmail.com',
    subject: `Contact Form: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
