const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('validator');


const productSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'You must supply an author'
    },
    name: {
        type: String,
        required: 'Please supply product name',
        trim: true 
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: 'Please select a category'
    },
    title: {
        type: String,
        required: 'Please supply a title',
        trim: true
    },
    price: {
        type: Number,
        required: 'Please supply a price'
    },
    image: {
        type: String
    }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

module.exports = mongoose.model('Product', productSchema);
