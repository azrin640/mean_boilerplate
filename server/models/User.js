const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passportLocalMongoose = require('passport-local-mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Please supply an email',
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid email address']        
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
userSchema.plugin(mongodbErrorHandler);

// Generate JSON web token
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      admin: this.admin,
      exp: parseInt(expiry.getTime() / 1000),
    }, process.env.MY_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('User', userSchema);