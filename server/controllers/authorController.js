const Blog = require('../models/Blog');
const User = require('../models/User');

// Get Author Profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ success: false, message: 'Author not found' });
        res.json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Update Author Profile
exports.updateProfile = async (req, res) => {
    try {
        const { name, bio, avatar } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { name, bio, avatar },
            { new: true }
        ).select('-password');
        res.json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get Author's own posts
exports.getMyPosts = async (req, res) => {
    try {
        const posts = await Blog.find({ author: req.user.id }).sort({ createdAt: -1 });
        res.json({ success: true, posts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get Author Analytics
exports.getAnalytics = async (req, res) => {
    try {
        const posts = await Blog.find({ author: req.user.id });
        const publishedCount = posts.filter(p => p.isPublished).length;
        const draftCount = posts.length - publishedCount;
        
        // Mocking views/likes for now as we don't have those models yet
        res.json({
            success: true,
            stats: {
                totalPosts: posts.length,
                published: publishedCount,
                drafts: draftCount,
                totalViews: posts.length * 142, // Mock fair data
                totalLikes: posts.length * 28   // Mock fair data
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};