const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Here you would normally extract the JWT token from headers
        // const token = req.headers.authorization.split(' ')[1];
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded;
        
        // if (req.user.role !== 'editor' && req.user.role !== 'admin') {
        //    return res.status(403).json({ success: false, message: 'Access denied: Editors only' });
        // }
        
        // For now, letting it pass through until auth is fully strict on client
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
};
