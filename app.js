const express = require('express')
const methodOverride =require('method-override')
const app = express()


const productControler= require('./controllers/productControler')
const cartControler=require('./controllers/cartControler')
app.use(express.static(__dirname + '/' + 'public'));
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(productControler)
app.use(cartControler)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Online Shop app is running on port ${port}`);
  });