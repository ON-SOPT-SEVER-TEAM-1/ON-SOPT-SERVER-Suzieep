const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');
const authUtils = require('../../middlewares/authUtil')

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

router.get('/', authUtils.checkToken,userController.getAllUser)
router.get('/:id', authUtils.checkToken,userController.findOneUser)
router.get('/profile', authUtils.checkToken,userController.getProfile)

router.delete('/:id', authUtils.checkToken,userController.deleteUser)
router.put('/:id', authUtils.checkToken, userController.updateUser)

module.exports = router;