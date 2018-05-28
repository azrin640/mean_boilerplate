const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('express-validator');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please supply category name',
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: 'Please supply category description',
        trim: true
    }

});

module.exports = mongoose.model('Category', categorySchema);