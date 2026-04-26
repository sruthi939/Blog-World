const express = require('express');
const router = express.Router();
const editorController = require('../controllers/editorController');
const editorAuth = require('../middleware/editorAuth');

// Protected routes for editors
router.get('/pending', editorAuth, editorController.getPendingPosts);
router.post('/approve/:id', editorAuth, editorController.approvePost);
router.post('/reject/:id', editorAuth, editorController.rejectPost);

module.exports = router;
