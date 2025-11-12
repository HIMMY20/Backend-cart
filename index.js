let ex = require("express")
let app = ex()
let cors = require("cors")
let connection = require("../Mongodb/Connection/connection")
let router = require("../Mongodb/Router/router")

connection()
app.use(cors())
app.use(ex.json())
app.use(router)

app.listen(5000)