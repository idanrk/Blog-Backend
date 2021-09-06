const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
        required: true
    }
})

userSchema.pre('save', async function(next) { //pre-save middleware
    const user = this
    if (user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 8)
    next()
})

const userModel = new mongoose.model('user', userSchema)
module.exports = userModel