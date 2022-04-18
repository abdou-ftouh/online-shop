const express=require('express');

const router= express.Router();
const Product= require('../models/productModel')


router.get('/',(req,res)=>{
    Product.find({})
    .then((data)=>{
        res.send(data)
    })
})

module.exports=router;
