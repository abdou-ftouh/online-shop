const express=require('express');

const router= express.Router();
const Product= require('../models/productModel')

router.get('/product',(req,res)=>{
    Product.find({})
    .then((data)=>{
        res.render('index',{stuff:data})
        // res.send(data)
    })
})
router.get('/product/:id',(req,res)=>{
    Product.findById(req.params.id)
    .then((data)=>{
        res.render('product',{data})
    })
})
router.get('/add',(req,res)=>{
res.render('addProd')
})
router.get('/mngProduct',(req,res)=>{
    Product.find({})
    .then((data)=>{
        res.render('mangeProd',{data})
        // res.send(data)
    })
    })
    
module.exports=router;
