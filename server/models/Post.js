const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({ title: String, content: String, authorId: mongoose.Schema.Types.ObjectId, isPublished: Boolean }, { timestamps: true });
module.exports = mongoose.model('Post', postSchema);