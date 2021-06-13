var express = require('express')
var router = require('./Router')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json())
app.use(router)

module.exports = app