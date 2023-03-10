require("dotenv").config()
require("./config/database")

//require all the Mongoose models

const User = require("./models/user")
//cosnt Item = require("./models/item")
// const Category = require('./models/category')
// const Order = require('./models/order')

//local variables will come in handy for holding retrieved documents
let user, item, category, order
let users, items, categories, orders