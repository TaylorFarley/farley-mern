const express = require('express')
const app = express()
const mongoose = require('mongoose')
require ('./models/User')
require('./services/passport')
const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes')
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



const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('runnin and runnin and runnin')
})
