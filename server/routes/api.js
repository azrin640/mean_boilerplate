const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    res.render('index');
})

// ** USER **
// Register User
router.post('/register', 
    userController.validateRegister,
    catchErrors(userController.register)
);

// Login User
router.post('/login', userController.login);

module.exports = router;


