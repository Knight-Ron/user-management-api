const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to fetch all users
router.get('/', userController.getAllUsers);

// Route to add a new user
router.post('/', userController.createUser);

// Route to update an existing user by ID
router.put('/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
