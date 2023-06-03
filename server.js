//DEPENDCIES
const express = require('express')
const app = express()

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//middleWare
const breadsController = require('./controllers/bread_controllers.js')
app.use('/breads', breadsController)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})