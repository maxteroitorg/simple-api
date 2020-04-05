/**
 * Simple API in NodeJS by Maxteroit
 */

const mysql = require("mysql")
var config = require("./config")

var conn = mysql.createConnection({
			host: config.MYSQL.HOST,
			user: config.MYSQL.USER,
			password: config.MYSQL.PASS,
			database: config.MYSQL.DATA
			})
conn.connect((err) => {
	if(err) throw err;
	console.log("Mysql Connected")
})

module.exports = conn;