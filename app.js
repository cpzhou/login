var express = require('express');
var fs=require('fs');
var app = express();
var path=require('path');
var bodyParser = require('body-parser'),
    users = [];
//console.log(bodyParser)
app.set('view engine','ejs');
app.set('views',path.resolve('view'));
//注册
app.get('/signup',function(req,res){
    res.render(path.resolve('./view/signup.ejs'))
});
app.use(bodyParser.urlencoded({extended:true}));
app.post('/signup',function(req,res){
    users.push(req.body);
    res.redirect('/signin');
});
//登录
app.get('/signin',function(req,res){
    res.render(path.resolve('./view/signin.ejs'))
});
app.post('/signin',function(req,res){
    console.log(1)
    var ary = req.body;
    var flag = users.find(function(item){
        return item.name == ary.name && item.password == ary.password;
    });

    if(flag){
        res.redirect('/welcome');
    }else{
        res.redirect('/signup');
    }
});
app.get('/welcome',function(req,res){
    res.render('welcome');
});
//欢迎页
app.get('/welcome');
app.listen(8080);
