require ('./models/User')
require('./services/passport')
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes')
const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express()
app.get('/',(req,res)=>{
    res.send('hi')
})

app.use(
    cookieSession({
        maxAge: 1 * 60 * 60 * 1000, //1 hour
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//above is needed below is just kinda for you.
mongoose.connection.once('open', _ => {
  console.log('Database connected:')
})
mongoose.connection.on('error', err => {
  console.error('connection error:', err)
})



const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('runnin and runnin and runnin')
})
