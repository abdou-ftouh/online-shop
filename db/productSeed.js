const Product=require('../models/productModel')
const seedData= require('./product.json')

Product.deleteMany({})
.then(() => {
    return Product.insertMany(seedData);
})
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => {
    process.exit();
});