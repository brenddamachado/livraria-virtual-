const express = require('express');
const app = express(); 
const { engine } = require('express-handlebars');

const router = require('./src/routes/index')



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use('/', router);










app.listen(3000, () => {
    console.log('rodando no http://localhost:3000/');
});