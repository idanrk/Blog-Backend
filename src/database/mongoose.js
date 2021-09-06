const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT } = require('../../config/config')
async function connectMongoose() {
    try {
        const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection successful")
        return 1
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = connectMongoose