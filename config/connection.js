var mysql = require('mysql');										// 	when deploying to heroku jawsdb, must use jawsdb_url codes
var connection; 													// 	var connection = mysql.createConnection({
if (process.env.JAWSDB_URL) { 										// 	port: 3306,
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {		
	connection = mysql.createConnection({
		host : 'localhost',											
		user : 'root',												
		password : "password", 										
		database : 'tutorials_db' 									
	});
}																	
// class solution instead of lines 22-29 npm documentation
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   // console.log('The solution is: ', results[0].solution);
// });
 
connection.end();

module.exports = connection;



