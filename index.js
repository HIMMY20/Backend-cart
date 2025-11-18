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
const router = require("../Router/router");
const connection = require("../Connection/connection");

require("dotenv").config();

const app = express();

// ⭐ MOST IMPORTANT – CORS FIX
app.use(cors({
    origin: "*",          // Allow all (for now)
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());
connection();
app.use(router);

app.get("/", (req, res) => {
  res.send("Backend is running on Vercel!");
});

module.exports = app;



