const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req,res) => {
    res.render('index', 
      {
        breads: Bread
      }) 
       
    //res.send(bread)
})

module.exports = breads

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
  res.render('Show', {
    bread:Bread[req.params.arrayIndex],
    index: req.params.arrayIndex,
  })

} else {
  res.render('404')
}
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = "https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg"
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
Bread.splice(req.params.indexArray, 1)
res.status(303).redirect('/breads')
})



module.exports = breads

