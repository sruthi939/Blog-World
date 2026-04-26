const Notification = require('../models/Notification');

exports.sendNotification = async (userId, message, type = 'info') => {
    try {
        if (!userId) return; // if no user to notify, skip
        
        const notification = new Notification({
            userId,
            message,
            type
        });
        
        await notification.save();
        console.log(`Notification saved for user ${userId}`);
        return true;
    } catch (error) {
        console.error('Failed to save notification:', error);
        return false;
    }
};
