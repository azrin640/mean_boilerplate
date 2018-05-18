const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.register = async (req, res) => {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    
    user.setPassword(req.body.password);
}