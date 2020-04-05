/**
 * Simple API in NodeJS by Maxteroit
 */

const express = require("express");
const conn = require("./connection")
const app = express();

var json = function(param){
	if(Array.isArray(param)){
		return JSON.stringify(param);
	}
}

app.get('/', function(err, res){
	res.setHeader('Content-Type', 'application/json');
	res.send("Error");
})

app.get('/users', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var sql = "SELECT * FROM users"
	conn.query(sql, function(err, res){
		if(err) throw err;
		global.result = res;
	})
	res.send(json(global.result));
})

app.get('/user/:id', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var sql = "SELECT * FROM users WHERE id = "+req.params.id
	conn.query(sql, function(err, res){
		if(err) throw err;
		global.result = res;
	})
	res.send(json(global.result))
})

app.post('/user/add', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var sql = "INSERT INTO users (id,name,username,password) VALUES ('','"+req.body.name+"','"+req.body.username+"','"+req.body.password+"')";
	conn.query(sql, function(res, err){
		if(err){
			console.log(err)
			global.result = new Array(["msg",["error","0"]])
		} else {
			global.result = new Array(["msg",["success","1"]]);
		}
	})
	res.send(json(global.result))
})

app.post('/user/delete',function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var sql = "DELETE FROM users WHERE id = '"+req.body.id+"'";
	conn.query(sql, function(res, err){
		if(err){
			console.log(err)
			global.result = new Array(["msg",["error","0"]])
		} else {
			global.result = new Array(["msg",["success","1"]])
		}
	})
	res.send(json(global.result))
})

app.post('/user/edit/:id',function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var sql = "UPDATE users SET name='"+req.body.name+"', username='"+req.body.username+"', password='"+req.body.password+"' WHERE id='"+req.params.id+"'";
	conn.query(sql, function(res, err){
		if (err) {
			console.log(err)
			global.result = new Array(["msg",["error","0"]])
		} else {
			global.result = new Array(["msg",["success","1"]])
		}
	})
	res.send(json(global.result))
})

app.get('/memek',function(req,res){
	res.send("hello");
})
module.exports = app;