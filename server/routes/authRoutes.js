const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const jwt = require('jsonwebtoken');

// Protect middleware (inline)
const protect = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer '))
        return res.status(401).json({ success: false, message: 'Not authorized. Please log in.' });
    try {
        const token = auth.split(' ')[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET || 'blogworld_secret_key_2026');
        next();
    } catch {
        res.status(401).json({ success: false, message: 'Invalid or expired session. Please log in again.' });
    }
};

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
