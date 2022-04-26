const express = require('express');

const router = express.Router();
const Cart = require('../models/cartModel')
router.get('/cart',(req,res)=>{
    Cart.find({})
    .then((items)=>{
        res.render('cart',{data: items})
    })
  
})
router.post('/cart', (req,res)=>{
    Cart.create(req.body)
    .then((data)=>{
        res.redirect('/cart')
    })
    .catch(console.error);
})
router.put("/cart/:id", (req, res) => {
    Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((data) =>
         res.redirect('/cart')
        )
        .catch(console.error);

});
router.delete('/cart/delete', (req, res) => {
    Cart.deleteMany({})
        .then((data) => {
            res.redirect('/cart')
        })
        .catch(console.error);
})

router.delete('/cart/:id', (req, res) => {
    Cart.findOneAndRemove({ _id: req.params.id })
        .then((data) => {
            res.redirect('/cart')
        })
        .catch(console.error);
})



module.exports = router;