const express = require("express");
const app = express();

const App = require("./app")


app.use("/", App);
module.exports = app;
