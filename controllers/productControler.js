const express = require('express');

const router = express.Router();
const Product = require('../models/productModel')

router.get('/home', (req, res) => {
    Product.find({})
        .then((data) => {
            res.render('index', { stuff: data ,pageTitle:'Home'})
        })
})
router.get('/product/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((data) => {
            res.render('product', { data ,pageTitle:'Home'})
        })
})
router.get('/addProduct', (req, res) => {
    res.render('addProd',{pageTitle:'ManageProduct'})
})
router.get('/mngProduct', (req, res) => {
    Product.find({})
        .then((data) => {
            res.render('mangeProd', { data,pageTitle:'ManageProduct' })
        })
});



router.post('/product/newProduct', (req, res) => {
    Product.create(req.body)
        .then((data) => {
            res.redirect('/mngProduct',{pageTitle:'ManageProduct'})
        })
        .catch(console.error);
})
router.put("/product/:id", (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => res.redirect('/mngProduct',{pageTitle:'ManageProduct'})
        )
        .catch(console.error);

});
router.delete('/product/:id', (req, res) => {

    Product.findOneAndRemove({ _id: req.params.id })
        .then((data) => {
            res.redirect('/mngProduct',{pageTitle:'ManageProduct'})
        })
})
router.get('/product/:id/edit', (req, res) => {
    Product.findById(req.params.id)
        .then((data) => {
            res.render('editProd', { data ,pageTitle:'ManageProduct'})
        })
})
module.exports = router;
