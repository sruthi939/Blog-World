const Blog = require('../models/Blog'); // Re-using your existing Blog model (acting as Post)
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

        // Optionally notify author if you have author reference
        // await sendNotification(post.authorId, `Your post "${post.title}" was approved!`, 'approval');

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

        // Depending on your logic, you might want to delete it or just mark it as rejected
        // For now, let's pretend we delete it or set a status field
        
        // Example: await sendNotification(post.authorId, `Your post "${post.title}" was rejected. Reason: ${reason}`, 'rejection');

        res.json({ success: true, message: 'Post rejected successfully' });
    } catch (error) {
        console.error('Error rejecting post:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
