const User = require('../models/User');

const UserController = {
  register: async (req, res) => {
    try {
      const { name, email, password, phone } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists with this email' });
      }

      // Create new user
      const user = new User({
        name,
        email,
        password, // In production, you should hash the password
        phone
      });

      await user.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check password (in production, compare hashed passwords)
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Send user data (exclude password)
      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      };

      res.json({ user: userData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UserController;
