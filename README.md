# Simple API with NodeJs and Mysql.

* install and run.
* go to folder api and run this command.
```
npm install express mysql --save
```
* or 
```
npm -i
```
* after that, run app.js.
```
node app.js
```

* [config.js](config.js)

this file is contain about port for listening, username, password, host, and database mysql.

edit port, host, user, pass, and data ( data = database ).

ex 
```
var config = {
	PORT: "1337", // set port for listen
	MYSQL:{
		HOST: "localhost", // set host mysql
		USER: "root", // set username mysql
		PASS: "", // set password mysql
		DATA: "test" // set databes mysql
	}
}
```

thanks.
