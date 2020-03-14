const express = require('express');
const mongoose = require('mongoose');
const dataUrl = 'mongodb://localhost:27017/cloud';
const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//路由划分
app.use('/front', require('./router/front'));
mongoose.connect(dataUrl,{ useNewUrlParser: true }, function(err){
    if(err){
        console.log("连接失败")
    }else{
        app.listen(8888);
        console.log("连接成功")
    }
});