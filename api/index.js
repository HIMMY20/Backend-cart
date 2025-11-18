// let ex = require("express")
// let app = ex()
// let cors = require("cors")
// let connection = require("../Connection/connection")
// let router = require("../Router/router")

// connection()
// app.use(cors())
// app.use(ex.json())
// app.use(router)

// module.exports = app;

const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const connection = require("../Connection/connection");
const router = require("../Router/router");

// Connect to MongoDB
connection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

module.exports = serverless(app);
