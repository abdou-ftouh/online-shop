const express = require('express');

const router = express.Router();
const Order = require('../models/orderModel')


router.get('/', (req,res)=>{
    Order.find({})
    .then((data)=>{
        res.render('order',{data:data})
    })
    .catch(console.error);
})

router.post('/', (req,res)=>{
    Order.create(req.body)
    .then((data)=>{
        res.redirect('/orders')
    })
    .catch(console.error);
})
router.delete('/:id', (req, res) => {
    Order.findOneAndRemove({ _id: req.params.id })
        .then((data) => {
            res.redirect('/cart')
        })
        .catch(console.error);
})

module.exports = router;