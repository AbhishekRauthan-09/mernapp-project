const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        minlength:3,
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },
    phone:{
        type: 'number',
        required: true,
    },
    work:{
        type: 'string',
        required: true,
    },
    password:{
        type: 'string',
        required: true,
    },
    cpassword:{
        type: 'string',
        required: true,
    },
})

const User = mongoose.model('USER',userSchema)

module.exports = User;