const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String 
});

module.exports = mongoose.model('Post', postSchema);