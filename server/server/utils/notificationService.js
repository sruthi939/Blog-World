const Notification = require('../models/Notification');

exports.sendNotification = async (userId, message, type) => {
  try {
    const notif = new Notification({ userId, message, type });
    await notif.save();
    console.log('Notification sent:', message);
  } catch (error) {
    console.error('Error sending notification', error);
  }
};