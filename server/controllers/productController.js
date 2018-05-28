const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Product =  mongoose.model('Product');
const User = mongoose.model('User');
const Category = mongoose.model('Category');
const { promisify } = require('es6-promisify');
require ('express-validator');

exports.createCategory = async (req, res) => {
    console.log(req.body);
    const category = new Category({
        name: req.body.name,
        description: req.body.description 
    });
    await category.save(function(err, success){
        if(err){
            console.log('Error:' + err);
            res.json({
                status: 400,
                message: 'This category has already been registered'
            })
        }
        if(success){
            console.log('Success:' + success);
            res.json({
                status: 201,
                message: 'Category created'
            })
        }
    });
}

exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
}

exports.validateProduct = (req, res, next) => {
    req.sanitizeBody('title');
    req.checkbody('title').notEmpty();
    req.sanitizeBody('price');
    req.checkbody('price').notEmpty();
    req.sanitizeBody('category');
    req.checkbody('category').notEmpty();
    req.sanitizeBody('title');
    req.checkbody('title').notEmpty();
}

exports.createProduct = async (req, res) => {
    console.log(req.body);
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        image: req.body.imageUrl
    });
    await product.save(function(err, result){
       if(result){
           res.json(result);
       }
       else{
           res.json(err);
       }
   });    
}