const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User');

// Obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Obtener un usuario por su ID
router.get('/:id', UserController.getUserByID);

// Obtener un usuario por su dirección de correo electrónico
router.get('/email/:email', UserController.getUserByEmail);

// Crear un nuevo usuario
router.post('/', UserController.createUser);

// Actualizar la información de un usuario existente
router.put('/:id', UserController.updateUser);

// Eliminar un usuario
router.delete('/:id', UserController.deleteUser);

module.exports = router;
