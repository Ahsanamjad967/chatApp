const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/ahsan',async (req,res)=>{res.send("hello hamza")});
// Add a new message
router.post('/', async (req, res) => {
  const message = new Message({
    user: req.body.user,
    content: req.body.content,
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
