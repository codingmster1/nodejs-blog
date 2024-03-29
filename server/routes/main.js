const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//routes
router.get ('', async (req, res) => {
    try {
        const locals = {
            title: "Cat's Name Blog",
            description: "Blog created in nodeJs and mongodb"
        }

let perPage = 10;
let page = req.query.page || 1;

const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
.skip(perPage * page - perPage)
.limit(perPage)
.exec();

const count = await Post.countDocuments({});
const nextPage = parseInt(page) + 1;
const hasNextPage = nextPage <= Math.ceil(count / perPage);

//const data = await Post.find();
res.render('index', { 
    locals, 
    data,
    current: page, 
    nextPage: hasNextPage ? nextPage : null
});
    

} catch (error) {
console.log(error);
    }
    
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