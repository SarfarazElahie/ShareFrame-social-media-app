const express = require("express");
const cors = require("cors")
const postRoutes = require("./routes/post.routes.js")

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", postRoutes)

module.exports = app;