const express = require('express')
const connectMongoose = require('./database/mongoose')
const redisSession = require('./database/redis')
connectMongoose()
const session = redisSession()

const app = express()
app.use(express.json())
app.use(session)


const postRouter = require('./routers/postRouter')
const userRouter = require('./routers/userRouter')
app.use('/posts', postRouter)
app.use('/users', userRouter)



app.get('/', (req, res) => {
    res.send("<h1>Hello@#!</h1>")
})


const port = process.env.PORT || 3000
app.listen(port, () => { console.log("Listening on port: " + port) })