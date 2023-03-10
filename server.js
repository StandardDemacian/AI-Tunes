const cors = require('cors')
const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")
    //always require and configure near the top
require("dotenv").config()
    //connect to the database at the connection string url
require("./config/database")

const app = express() //create the app

const PORT = process.env.PORT || 3001

app.use(logger("dev"))
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }))

    // Configure both serve-favicon & static middleware
    // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
    //telling express app to use this directory for the static assets
app.use(express.static(path.join(__dirname, "build")))

app.use(require("./config/checkToken"))

//-------API Routes here, before the catch all--------------
app.use("/api/users", require("./routes/users"))

app.listen(PORT, function() {
    console.log(`Express app running on port ${PORT}`)
})