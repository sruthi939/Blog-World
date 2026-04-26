module.exports = (req, res, next) => { 
  // Placeholder editor auth
  // if (req.user && req.user.role === 'editor') return next();
  // res.status(403).json({ message: 'Forbidden' });
  next(); 
};