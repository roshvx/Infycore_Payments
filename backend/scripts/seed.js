import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Project from '../models/Project.js';

dotenv.config();

// Connect to Database
connectDB();

const sampleProjects = [
  {
    title: 'Infycore Payment Gateway',
    description: 'Accept credit cards, net banking, UPI, and digital wallets on your web or mobile apps with a 99.6% success rate and intelligent routing mechanics.',
    category: 'Payment Gateway',
    tags: ['Cards', 'NetBanking', 'Wallets', 'UPI'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  },
  {
    title: 'Dynamic UPI & QR Codes',
    description: 'Generate dynamic UPI QR codes instantly for checkouts or in-store retail terminals to receive instant bank-to-bank settlements.',
    category: 'UPI & QR',
    tags: ['UPI', 'Dynamic QR', 'Static QR', 'Soundbox'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  },
  {
    title: 'Payouts & settlements',
    description: 'Process lightning fast vendor payouts, employee salaries, and customer refunds 24/7 even on weekends and bank holidays.',
    category: 'Payout Links',
    tags: ['IMPS', 'NEFT', 'RTGS', 'UPI Payout'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  },
  {
    title: 'Secure Payin Links',
    description: 'Request instant payments from your clients via SMS, Email, or WhatsApp using highly secure and customized billing pages.',
    category: 'Payin Links',
    tags: ['SMS Pay', 'Web Checkout', 'Billing Links'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  }
];

const seedDatabase = async () => {
  try {
    // Clean old projects
    await Project.deleteMany({});
    console.log('Old projects cleared from database.');

    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log('Sample projects seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

// Delay execution slightly to ensure DB connects
setTimeout(seedDatabase, 2000);
