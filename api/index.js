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
const router = require("../Router/router");
const connection = require("../Connection/connection");

require("dotenv").config();

connection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// Root route (to avoid 404)
app.get("/", (req, res) => {
  res.send("Backend is running on Vercel!");
});

module.exports = serverless(app);
