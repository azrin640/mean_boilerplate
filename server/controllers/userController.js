const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');
require('express-validator');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name').notEmpty();
    req.checkBody('email', 'That email is not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extensions: false,
        gmail_remove_subaddress: false 
    });
    req.checkBody('password', 'Password can not be blank').notEmpty();
    req.checkBody('confirmPassword', 'Your password do not match').equals(req.body.password);

    const errors = req.validationErrors();  
    return next();
};

exports.isLoggedIn = async (req, res, next) => {
    var auth = req.headers.authorization;
    var token = auth.split(' ')[1];
    var decodedUser = jwt.decode(token);
    const user = await User.findOne({_id: decodedUser._id});
    if(user){
        return next();
    }
    else{
        res.json('No User');
    }      
};

exports.register = async (req, res, next) => {    
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    await user.setPassword(req.body.password);
    await user.save(function (err, user){
        if(err){
            res.json({
                status: 400,
                message: 'User has already registered'
            })
        }
        if(user){
            var token = user.generateJwt();

            res.json({
                    status: 201,
                    message: 'User created',
                    token,
                    id: user._id
            })
        }
    });
    
};

exports.login = (req, res, next) => {
    passport.authenticate('local', function(err, user, info){
        if(err){
            res.json({
                status: 401,
                message: 'Unauthorized'
            })
        }
        if(!user) {
            res.json({
                status: 404,
                message: 'User not found'
            })
        }
        if(user){
            var token = user.generateJwt();
            res.json({
                status: 202,
                message: 'User login accepted',
                token: token,
                id: user._id
            });
        }

    })(req, res, next);
};