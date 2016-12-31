var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var apiRouter = require('./routes/api.js')
var db = require('./models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

//ROUTES//
app.use('/api', apiRouter)

//INDEX VIEW//
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

//DB SYNC//
db.sequelize.sync().then(function() {
  app.listen(3000, ()=>console.log('Listening to port 3000'))
})
