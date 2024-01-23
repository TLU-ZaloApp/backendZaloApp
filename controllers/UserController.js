const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const {
      phone,
      fullName,
      className,
      deviceId,
      department,
      studentId,
    } = req.body;

    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      res.status(400).json({ success: false });
    } else {
      const newUser = new User({
        phone,
        fullName,
        className,
        deviceId,
        department,
        studentId,
      });

      const savedUser = await newUser.save();

      res.status(201).json({ success: true });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getUserByPhone = async (req, res) => {
  try {
    const { phone } = req.params;

    const user = await User.findOne({ phone });

    if (!user) {
      res.status(404).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getUserByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;

    const user = await User.findOne({ studentId });

    const responseObject = {
      success: !!user,
      user: user || null,
    };

    res.status(200).json(responseObject);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const updateUserByPhone = async (req, res) => {
  try {
    const { phone } = req.params;
    const updateData = req.body;

    const updatedUser = await User.findOneAndUpdate({ phone }, updateData, {
      new: true,
    });

    if (!updatedUser) {
      res.status(404).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = {
  createUser,
  getUserByPhone,
  updateUserByPhone,
  getUserByStudentId,
};
