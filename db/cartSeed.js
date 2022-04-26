const Cart = require('../models/cartModel')
// const data = {
    //     "name":"Iphone",
    //    "price":930,
    //    "quantity":2,
    //    "productId":"625f116bc53094e010a7a91f"
// }

Cart.deleteMany({})
    .then(() => {
        return Cart.insertMany(data);
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        process.exit();
    });