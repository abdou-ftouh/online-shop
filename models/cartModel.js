const mongoose=require('../db/connection');

const CartShema= new mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    productId:String
},
{timestamps:true}
)
const Cart = mongoose.model('cart',CartShema);

module.exports=Cart;