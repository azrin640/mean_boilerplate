const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
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

// ** PRODUCT **

router.post('/category', 
    catchErrors(userController.isLoggedIn),
    catchErrors(productController.createCategory)
);

router.get('/categories', catchErrors(productController.getCategories));
router.post('/product', catchErrors(productController.createProduct));
router.get('/products', catchErrors(productController.getProducts));
router.get('/product/:id', catchErrors(productController.getProduct));
router.post('/product/update/:id', catchErrors(productController.updateProduct));
router.post('/product/delete/:id', catchErrors(productController.deleteProduct));

module.exports = router;


