const express = require("express");
const route = express.Router();
module.exports = route;

route.get("/api/checkcode", (req, res) => res.send(Math.random().toString(36).substr(2, 4)))
