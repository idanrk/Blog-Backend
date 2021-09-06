const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)

const { REDIS_URL, REDIS_PORT, SESSION_SECRET } = require('../../config/config')

function redisSession() {
    let redisClient = redis.createClient({
        host: REDIS_URL,
        port: REDIS_PORT
    })
    return session({
        store: new RedisStore({ client: redisClient }),
        secret: SESSION_SECRET,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 10000
        },
        resave: false,
        saveUninitialized: true
    })
}
module.exports = redisSession