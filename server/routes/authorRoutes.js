const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/profile', authorController.getProfile);
router.put('/profile', authorController.updateProfile);
router.get('/posts', authorController.getMyPosts);
router.get('/analytics', authorController.getAnalytics);

module.exports = router;