require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/author', authorRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/upload', uploadRoutes);

const editorRoutes = require('./routes/editorRoutes');
app.use('/api/editor', editorRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/blogworld')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
