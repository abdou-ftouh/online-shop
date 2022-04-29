const express = require('express');

const router = express.Router();
const Cart = require('../models/cartModel')
router.get('/',(req,res)=>{
    Cart.find({})
    .then((items)=>{
        res.render('cart',{data: items})
    })
  
})
router.post('/', (req,res)=>{
    Cart.create(req.body)
    .then((data)=>{
        res.redirect('/cart')
    })
    .catch(console.error);
})
router.put("/:id", (req, res) => {
    Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((data) =>
         res.redirect('/cart')
        )
        .catch(console.error);

});
router.delete('/delete', (req, res) => {
    Cart.deleteMany({})
        .then((data) => {
            res.redirect('/cart')
        })
        .catch(console.error);
})

router.delete('/:id', (req, res) => {
    Cart.findOneAndRemove({ _id: req.params.id })
        .then((data) => {
            res.redirect('/cart')
        })
        .catch(console.error);
})

router.post('/verify',(req,res)=>{
   
    Cart.find({})
    .then((data)=>{
        res.render('verify',{data:data,total:req.body.total})
    })
      
    })
  


module.exports = router;