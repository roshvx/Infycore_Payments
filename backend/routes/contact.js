import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// @desc    Submit contact message
// @route   POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields (name, email, subject, message) are required' });
    }

    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error saving message', error: error.message });
  }
});

// @desc    Get all messages (Optional/Admin view)
// @route   GET /api/contact/messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving messages', error: error.message });
  }
});

export default router;
