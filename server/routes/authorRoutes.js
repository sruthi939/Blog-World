const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/profile', authorController.getProfile);
router.put('/profile', authorController.updateProfile);

module.exports = router;