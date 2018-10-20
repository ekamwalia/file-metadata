require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const path = require('path')

const routes = require('./routes')
const responseWriter = require("./utils/responseWriter")

const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(logger('dev'))
app.use(responseWriter)
app.use("/", routes)

app.listen(process.env.PORT, (err) => {
    if(err) 
        return console.log("[ERROR]", err)
    console.log("[INFO] App started on port", process.env.PORT)
});