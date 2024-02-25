const UserService = require('../services/User');
const handleAsyncError = require('../utils/errorHandler');

const getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
};

const getUserByID = async (req, res) => {
    const id = req.params.id;
    const users = await UserService.getUserByID(id);
    res.json(users);
};

const getUserByEmail = async (req, res) => {
    console.log('entreeeee')
    const email = req.params.email;
    console.log(req.params)
    const user = await UserService.getUserByEmail(email);
    res.json(user);
};

const createUser = async (req, res) => {
    const userData = req.body;
    const newUser = await UserService.createUser(userData);
    res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    await UserService.updateUser(userId, userData);
    res.sendStatus(204);
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    await UserService.deleteUser(userId);
    res.sendStatus(204);
};

module.exports = {
    getAllUsers: handleAsyncError(getAllUsers),
    getUserByID: handleAsyncError(getUserByID),
    getUserByEmail: handleAsyncError(getUserByEmail),
    createUser: handleAsyncError(createUser),
    updateUser: handleAsyncError(updateUser),
    deleteUser: handleAsyncError(deleteUser)
};
