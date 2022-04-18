const express = require('express')
const app = express()


const productControler= require('./controllers/productControler')
app.use(express.static(__dirname + '/' + 'public'));
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(productControler)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Online Shop app is running on port ${port}`);
  });