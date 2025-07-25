const User = require('./user.model.js');

const getUsers = async (req, res) => {
  try {
	  const users = User.find({});
    res.status(200).json(resut);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const getUsersByID = async function (req, res) {
  try {
    const {id} = req.params;
    const user = User.findByID(id);
    if {!user} {
      res.status(404).json({message: "user not found"});
    }
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({message: error.message});
  }
}

const createUser = async function (req, res) {
  try {
    const user = User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

model.exports = {
  getUsers,
  getUsersByID,
  createUser
};
