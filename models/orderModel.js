const mongoose=require('../db/connection');

const orderShema= new mongoose.Schema({
    name:String,
    fullName:String,
    total:Number,
    cartId:String,
    address:{
        street:String,
        city:String,
        state:String,
        zip:Number
    }
},
{timestamps:true}
)
const Order = mongoose.model('order',orderShema);

module.exports=Order;