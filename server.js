//DEPENDCIES
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//middleWare
app.use(methodOverride('_method'))
app.use(express.urlencoded ({extended: true}))
const breadsController = require('./controllers/bread_controllers.js')
app.use('/breads', breadsController)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(express.static('public'))


//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})