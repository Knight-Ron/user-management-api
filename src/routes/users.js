// src/routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/users → Fetch all users
router.get('/', userController.getAllUsers);

// POST /api/users → Add a new user
router.post('/', userController.createUser);

// PUT /api/users/:id → Update user by ID
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id → Remove user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
