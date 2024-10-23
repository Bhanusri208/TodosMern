const authController = require('../controllers/authController');
const express = require('express');

const router = express.Router();

router.post('/register', authController.userRegister);
router.post('/login', authController.userLogin);


module.exports = router;