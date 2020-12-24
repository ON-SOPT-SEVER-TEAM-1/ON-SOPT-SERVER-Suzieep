const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

router.get('/', userController.getAllUser)
router.get('/:id', userController.findOneUser)

router.delete('/:id', userController.deleteUser)

router.put('/:id', userController.updateUser)

module.exports = router;