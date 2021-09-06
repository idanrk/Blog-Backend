const userModel = require('../models/user')
const bcrypt = require('bcrypt')
exports.loginUser = async(req, res) => {
    try {
        const user = await userModel.findOne({ username: req.body.username })
        if (!user)
            return res.status(404).send("User not found")
        const auth = await bcrypt.compare(String(req.body.password), user.password)
        if (!auth)
            throw new Error("Wrong credentials!")
        req.session.user = user
        res.send(user)
    } catch (error) {
        res.status(403).send(error.message)
    }

}
exports.createUser = async(req, res) => {
    try {
        const user = await userModel.create(req.body)
        await user.save()
        req.session.user = user
        return res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
exports.updateUser = async(req, res) => {
    const user = req.user
    try {
        const updates = Object.keys(req.body)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        return res.send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
exports.deleteUser = async(req, res) => {
    try {
        await userModel.findByIdAndDelete(req.user.id)
        return res.send(req.user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}