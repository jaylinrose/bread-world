//DEPENDCIES
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')


//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)


app.use(express.static('public'))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  


//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

    
// Middleware:
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
  
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })


//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})