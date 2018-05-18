const mongoose = require('mongoose');
require('../models/Post');
const Post = mongoose.model('Post');
const promisify = require('es6-promisify'); 


exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};