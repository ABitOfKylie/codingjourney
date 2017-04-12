
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'tutorials_db'
// });

// connection.connect(function (err) {
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}
// 	console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

module.exports = connection;


