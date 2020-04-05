/**
 * Simple API in NodeJS by Maxteroit
 */
const express = require("express");
const body = require("body-parser");
const app = express();
var config = require("./config")

app.use(body.urlencoded({extended:true}));
app.use(body.json())

var api = require("./api")
app.use('/', api)

app.listen(config.PORT,() => {
	console.log("Server Running in " + config.PORT)
})