var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3006,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect(function(err) {
	if(err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;