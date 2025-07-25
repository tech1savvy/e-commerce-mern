const User = require('./user.model.js');

const getUsers = async (req, res) => {
  try {
	  const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const getUserByID = async function (req, res) {
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({message: "user not found"});
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

const createUser = async function (req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {
  getUsers,
  getUserByID,
  createUser
};
