const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust path if needed

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/delete', async (req, res) => {
  const userId = req.user.id; // Assuming you have middleware to extract user from token

  try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
