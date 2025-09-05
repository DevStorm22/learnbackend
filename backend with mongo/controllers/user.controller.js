import User from "../models/user.model.js";

const home = async (req, res) => {
  res.send("Hello World");
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const users = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const userById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const searchByName = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteByName = async (req, res) => {
  try {
    const user = await User.deleteOne({ name: req.params.name });
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateByIdCompletely = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );
    res.status(200).json({ message: "User updated successfully", user: user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateByIdPartially = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    res.status(200).json({ message: "User updated successfully", user: user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  home,
  register,
  users,
  userById,
  searchByName,
  deleteByName,
  updateByIdCompletely,
  updateByIdPartially,
};
