exports.getPendingPosts = async (req, res) => { res.json({ success: true, message: 'Get pending posts' }); };
exports.approvePost = async (req, res) => { res.json({ success: true, message: 'Approve post' }); };
exports.rejectPost = async (req, res) => { res.json({ success: true, message: 'Reject post' }); };