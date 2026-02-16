const bcryptjs = require('bcryptjs');
const userModel = require("../model/userModel");

const register = async (req,resp) => {
    try {
        const {username, email, password, role} = req.body;
        const hashp = await bcryptjs.hash(password,10); 
        await userModel.create({username, email, password:hashp, role});
        resp.redirect("/login?success=Account Created Succesfully!");
    } catch (error) {
        console.log(error);
        resp.redirect("/register?error=Something Went Wrong!")
    }
};

const login = async (req,resp) => {
    try {
        const {username, password} = req.body;
        const user = await userModel.findOne({username});
        if (!user) {
            resp.redirect("/login");
        }else if(await bcryptjs.compare(password, user.password)){
            req.session.userData = {
                id : user._id,
                username : user.username,
                role : user.role
            };
            resp.redirect("/");
        }
    } catch (error) {
        resp.status(505).send("Login Failed");
    }
};

const logout = (req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login");
    });
};

module.exports = {login, register, logout};