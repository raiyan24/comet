
const express = require('express');
const { showHomePage, showShopPage, showSingleBlogPage } = require('../controllers/pageController');


//init Router
const router = express.Router();

router.get('/', showHomePage);
router.get('/shop', showShopPage);
router.get('/:id', showSingleBlogPage);

//Export Router
module.exports = router;