const User = require('../models/User');

const getAllUsers = async () => {
    return await User.getAll();
};

const getUserByID = async (id) => {
    return await User.getByID(id);
};

const getUserByEmail = async (email) => {
    return await User.getByEmail(email);
};

const createUser = async (userData) => {
    const {username, email, age} = userData;
    const newUser = new User(null, username, email, age);
    return await newUser.save();
};

const updateUser = async (userId, userData) => {
    const {username, email, age} = userData;
    const userToUpdate = new User(userId, username, email, age);
    return await userToUpdate.update();
};

const deleteUser = async (userId) => {
    const userToDelete = new User(userId);
    return await userToDelete.delete();
};

module.exports = {
    getAllUsers,
    getUserByID,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};
