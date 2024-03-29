const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//routes
router.get ('', (req, res) => {

    const locals = {
        title: "Cat's Name Blog",
        description: "Blog created in nodeJs and mongodb"
    }
    res.render('index', { locals });
});



router.get ('/about', (req, res) => {
    res.render('about');
});

module.exports = router;




/* function insertPostData () {
    Post.insertMany([
        {
            title: "building a blog",
            body: "this is the body text"
        },
        {
            title: "Deployment of Node.js applications",
            body: "this is the body text"
        },
        {
            title: "building a blog",
            body: "this is the body text"
        },
        {
            title: "building a blog",
            body: "this is the body text"
        },
        {
            title: "building a blog",
            body: "this is the body text"
        },
        {
            title: "building a blog",
            body: "this is the body text"
        },
    ])
}
insertPostData(); */