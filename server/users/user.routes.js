const express = require('express');
const router = express.Router();

const { getUsers, getUserByID, createUser } = require('./user.controller.js');

router.get('/', getUsers);

router.get('/:id', getUserByID);

router.post('/', createUser);

module.exports = router;
