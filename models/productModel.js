const mongoose=require('../db/connection');

const ProductShema= new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    description:String,
    category:String

})
const Product = mongoose.model('product',ProductShema);
module.exports=Product;