const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser } = require('./user.controller.js');

router.get('/', getUsers);

router.get('/:id', getUsersById);

router.post('/', createUser);

module.exports = router
