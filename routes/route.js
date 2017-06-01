/**
 * Created by Administrator on 2017/5/17.
 */
"use strict";
const mongoose = require('mongoose');
const formidable = require('formidable');
require('../models');
let messages = mongoose.model('messages');

exports.showIndex = function (req,res,next) {
    messages.find({}).sort({"time":-1}).exec(function (err, message) {
        if (err) {next();return;}
        res.render('index', {title:'hello world', message});
    });
};
exports.insertData = function (req, res, next) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        let newData = new messages({
            name : fields.name,
            content : fields.mesages,
        });
        newData.save(function (err) {
            if (err){
                res.json({"msg":"-1"});return false;
            }else {
                res.json({"msg":"1", "fields": fields});
            }
        });
        // console.log(fields);
    });
};