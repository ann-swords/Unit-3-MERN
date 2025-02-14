const express = require('express')
const cors = require('cors')//To connect to the sercer in the front end!

//Initilize our application
const app = express()

//Always should be on top
require('dotenv').config()
require('./config/database')

//Mount our Middleware
//..
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//....
app.use('/', require('./routes/tweets'))
app.use('/', require('./routes/users'))



//Listinign on a port
app.listen(4000, () => {
    console.log('App listining on port 4000!')
})