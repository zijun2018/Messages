"use strict";
const express = require('express');
const route = require('./routes');
const app = express();

//set view engine
app.set('view engine','ejs');

//set middleware and route
app.use(express.static('./public'));
app.get('/',route.showIndex);
app.post('/submit',route.insertData);

app.use('/',function (req,res) {
   res.render('error');
});
app.listen(3010);
console.log('服务器已启动...');