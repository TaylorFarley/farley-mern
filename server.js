const express = require('express')
const app = express()
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
authRoutes(app)


  
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('runnin and runnin and runnin')
})
