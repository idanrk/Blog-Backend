const userModel = require('../models/user')
const auth = async(req, res, next) => {
    if (!req.session.user)
        return res.status(401).send({ "error": "Please Authenticate." })
    try {
        const user = await userModel.findOne({
            "_id": req.session.user._id,
            "username": req.session.user.username
        })
        if (!user)
            throw new Error()
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({ "error": "Please Authenticate." })
    }
}
module.exports = auth