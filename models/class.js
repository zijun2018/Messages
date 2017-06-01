/**
 * Created by Administrator on 2017/5/17.
 */
"use strict";
const mongoose = require('mongoose');
//connect mongodb
const db = mongoose.connect('mongodb://coder:code@localhost:27017/banjing');
db.connection.on('error',(err)=>{
    console.log('Sorry,database connected faild:'+ err);
});
db.connection.on('open',(callback)=>{
   console.log('Well,congratuations,database connected success!');
});

//create schema,set data type
const messageSchema = new mongoose.Schema({
    name:{type:String,default:'匿名大神'},
    content:{type:String,default:''},
    time:{type:String,default:new Date().toLocaleString()}
});

//create model,choose collections
const messages = mongoose.model('messages', messageSchema);


