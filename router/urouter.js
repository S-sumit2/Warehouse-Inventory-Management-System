const express = require('express');
const { register, login, logout } = require('../controller/userController');

const uroute = express.Router();

uroute.get("/login",(req,resp)=>{
    resp.render("login");
});
uroute.get("/register",(req,resp)=>{
    resp.render("register");
});

uroute.post("/register",register);
uroute.post("/login",login);
uroute.get("/logout",logout);

module.exports = uroute;