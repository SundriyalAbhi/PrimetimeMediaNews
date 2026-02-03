const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');
const permissionsByRole = require('../Config/permissions.js');

exports.UserSignUp = async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      return res.status(409).json({ 
        success: false,
        msg: "User already exists" 
      });
    }

    const { password, role } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ 
        success: false,
        msg: "Password must be at least 6 characters long" 
      });
    }

    const userRole = role || 'USER';
    const permissions = permissionsByRole[userRole] || permissionsByRole['USER'];

    const Salt = await bcrypt.genSalt(12);
    const hashpassword = await bcrypt.hash(password, Salt);

    const NewUser = new User({
      ...req.body,
      password: hashpassword,
      role: userRole,
      permissions: permissions
    });

    const user = await NewUser.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(201).json({ 
      success: true,
      user: userResponse, 
      msg: "Your Account is Created" 
    });

  } catch (error) {
    console.error('SignUp Error:', error);
    return res.status(500).json({ 
      success: false,
      msg: "Server error during registration" 
    });
  }
};

exports.UserSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        msg: "Email and password are required" 
      });
    }

    const user = await User.findOne({ email: email }).select('+password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false,
        msg: "User does not exist" 
      });
    }

    if (!user.isActive) {
      return res.status(403).json({ 
        success: false,
        msg: "Account is deactivated" 
      });
    }

    const verify = await bcrypt.compare(password, user.password);

    if (!verify) {
      return res.status(401).json({ 
        success: false,
        msg: "Wrong password" 
      });
    }

    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email,
        role: user.role,
        permissions: user.permissions
      },
      process.env.SECRET,
      { expiresIn: '24h' }
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_SECRET || process.env.SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      token,
      refreshToken,
      userId: user._id,
      profilepic: user.ProfilePicture,
      name: user.name,
      role: user.role,
      permissions: user.permissions,
      msg: "Welcome"
    });

  } catch (error) {
    console.error('SignIn Error:', error);
    return res.status(500).json({ 
      success: false,
      msg: "Server error during login" 
    });
  }
};
