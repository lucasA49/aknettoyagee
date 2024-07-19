// // server/controllers/adminController.js
// const userRepository = require('../database/models/userRepository.js');
// const jwt = require('jsonwebtoken');

// // Register new admin
// const registerAdmin = async (req, res, next) => {
//   const { username, password } = req.body;

//   try {
//     // Check if admin already exists
//     const existingAdmin = await userRepository.findByUsername(username);
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin already exists' });
//     }

//     // Create new admin
//     const newAdmin = await userRepository.createUser(username, password);
//     res.status(201).json({ id: newAdmin.id, username: newAdmin.username });
//   } catch (err) {
//     next(err);
//   }
// };

// // Login admin and generate JWT
// const loginAdmin = async (req, res, next) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await userRepository.findByUsername(username);
//     if (!admin) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await userRepository.matchPassword(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = {
//   registerAdmin,
//   loginAdmin,
// };
