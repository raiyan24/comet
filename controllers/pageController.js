const path = require('path');
const {readFileSync} = require('fs');

//Show Home Page
const showHomePage = ( req, res ) => {
    const sliders = readFileSync(path.join(__dirname, '../db/slider.json'));
    const client = readFileSync(path.join(__dirname, '../db/client.json'));
    const blog = readFileSync(path.join(__dirname, '../db/blog.json'));

    res.render('index', {
        slider : JSON.parse(sliders),
        client : JSON.parse(client),
        blog : JSON.parse(blog)
    });
}

//show single blog
const showSingleBlogPage = (req, res) => {
    const posts = JSON.parse(readFileSync(path.join(__dirname, '../db/blog.json')));
    const single_post = posts.find( data => data.id == req.params.id );

    res.render('single', {
        single : single_post
    });
}

//Show shop page
const showShopPage = (req, res) => {
    const products = readFileSync(path.join(__dirname, '../db/shop.json'));

    if( products.rating > 6 ) {
        products = products.rating;
    }
    res.render('shop', {
        products : JSON.parse(products)
    });
}

//exports controllers
module.exports = {
    showHomePage,
    showShopPage,
    showSingleBlogPage,
}