const Order = require('../models/orderModel')

Order.deleteMany({})
    .then(() => {
        return Order.insertMany(data);
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        process.exit();
    });