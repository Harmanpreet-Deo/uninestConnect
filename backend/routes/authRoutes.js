const express = require('express');
const { registerUser, loginUser, getProtectedData } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); // User registration
router.post('/login', loginUser);       // User login
router.get('/protected', protect, getProtectedData); // Protected route

module.exports = router;
