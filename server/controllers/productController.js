const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Product =  mongoose.model('Product');
const User = mongoose.model('User');
const Category = mongoose.model('Category');
const { promisify } = require('es6-promisify');
require ('express-validator');

exports.createCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description 
    });
    await category.save(function(err, success){
        if(err){
            res.json(err);
        }
        if(success){
            res.json(success);
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

exports.getProducts = async (req, res) => {
    const products = await Product.find(function(err, results){
        if(err){
            res.json(err);
        }
        if(results){
            res.json(results);
        }
    });
}

exports.getProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    await Product.findByIdAndUpdate(
        {_id: id},
        {   title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            image: req.body.imageUrl
        }, 
        {new: true},
        function(err, result) {
            if(err){
                res.json(err);
            }
            if(result){
                res.json(result);
            }
    });
}

exports.deleteProduct = async (req, res) => {
    if(req.params.id){
        await Product.findByIdAndRemove({_id: req.params.id}, function(err, result){
            if(err){
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
    }
}