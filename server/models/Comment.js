const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({ postId: mongoose.Schema.Types.ObjectId, content: String, authorName: String }, { timestamps: true });
module.exports = mongoose.model('Comment', commentSchema);