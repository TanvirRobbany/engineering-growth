const mongoose = require("mongoose");
const userService = require("../services/user.service");

const isValidId = (id) => mongoose.isObjectIdOrHexString(id);

const createUser = async (req, res) => {
  const user = await userService.createUser(req.validatedBody);

  res.status(201).json({
    success: true,
    data: user,
  });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.status(200).json({
    success: true,
    data: users,
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID",
    });
  }

  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID",
    });
  }

  const user = await userService.updateUser(
    id,
    req.validatedBody
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID",
    });
  }

  const user = await userService.deleteUser(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};