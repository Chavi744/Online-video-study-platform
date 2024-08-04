const User = require('../models/User');

const getUserData = async (userId) => {
  try {
    const user = await User.findById(userId).lean();
    if (!user) {
      throw new Error('User not found');
    }
    return {
      name: user.name,
      email: user.email,
      motivation: user.motivation ?? 5, // שימוש בערך ברירת מחדל אם motivation אינו מוגדר
      grades: user.grades || [],
    };
  } catch (error) {
    throw new Error(error.message || 'Error fetching user data');
  }
};

module.exports = { getUserData };
