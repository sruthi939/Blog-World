const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({ name: String, slug: String }, { timestamps: true });
module.exports = mongoose.model('Category', categorySchema);