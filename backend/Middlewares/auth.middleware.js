const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ 
        success: false,
        msg: "No token provided" 
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    
    req.user = decoded;
    next();

  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false,
        msg: "Token expired" 
      });
    }
    
    return res.status(401).json({ 
      success: false,
      msg: "Invalid token" 
    });
  }
};

exports.authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false,
        msg: "Access denied" 
      });
    }
    next();
  };
};
