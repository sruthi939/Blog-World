const Blog = require('../models/Blog');
const { sendNotification } = require('../utils/notificationService');

exports.getPendingPosts = async (req, res) => {
    try {
        const pendingPosts = await Blog.find({ isPublished: false }).sort({ createdAt: -1 });
        res.json({ success: true, posts: pendingPosts });
    } catch (error) {
        console.error('Error fetching pending posts:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.approvePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Blog.findByIdAndUpdate(id, { isPublished: true }, { new: true });

        if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
        res.json({ success: true, message: 'Post approved successfully', post });
    } catch (error) {
        console.error('Error approving post:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.rejectPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;

        const post = await Blog.findById(id);
        if (!post) return res.status(404).json({ success: false, message: 'Post not found' });

        res.json({ success: true, message: 'Post rejected successfully' });
    } catch (error) {
        console.error('Error rejecting post:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getPublishedPosts = async (req, res) => {
    try {
        const publishedPosts = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
        res.json({ success: true, posts: publishedPosts });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const Category = require('../models/Category');
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.json({ success: true, categories });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const Comment = require('../models/Comment');
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
