const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        lowercase : true,
        minlength : 5,
        maxlength : 15,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        minlength : 3,
        required : true
    },
    role : {
        type : String,
        enum : ["admin","staff"],
        default : "staff"
    }
},{timestamps : true});

module.exports = mongoose.model("User",userSchema);