let ex = require("express")
let app = ex()
let cors = require("cors")
let connection = require("./Connection/connection")
let router = require("./Router/router")

connection()
app.use(cors())
app.use(ex.json())
app.use(router)

module.exports = app;