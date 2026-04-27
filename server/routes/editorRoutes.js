const express = require('express');
const router = express.Router();
const editorController = require('../controllers/editorController');
const editorAuth = require('../middleware/editorAuth');

// Protected routes for editors
router.get('/pending', editorAuth, editorController.getPendingPosts);
router.post('/approve/:id', editorAuth, editorController.approvePost);
router.post('/reject/:id', editorAuth, editorController.rejectPost);
router.get('/published', editorAuth, editorController.getPublishedPosts);
router.get('/categories', editorAuth, editorController.getCategories);
router.get('/comments', editorAuth, editorController.getComments);

module.exports = router;
