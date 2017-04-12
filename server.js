var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var logger = require("morgan");

var app = express();  // create an app

// app.get('/', function(req, res){ //main route
//   res.render("index");
// });

app.get('/', function(req, res){	//callback function
	var luckyNumber = Math.round(Math.random()*10);
	res.render("home", {
		luckyNumber: luckyNumber
	});
});

app.get('/about', function(req, res){	//add another route
	res.render("about");
});

app.get('/', function(req, res){ //add another route
  res.render("index");
});
// app.use(express.static("public")); //serve up files in the public dir and use express method static to do so
// app.use('/public', express.static("public")); //optional to give it an initial path
app.use(express.static(process.cwd() + '/public')); // better to use with Heroku

//dev = Concise output colored by response status for development use
app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", 
		exphbs({extname:'handlebars', 
				defaultLayout: 'main'})); 
//extname: file extension name hbs instead of handlebars optional

app.set('view engine', 'handlebars'); // register hbs with express app

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// //set up routing
// // app.get('/', function (req, res) {
// //   res.redirect('/index');
// });
var routes = require('./controllers/tutorials_controller.js');

app.use('/', routes);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

var port = Number(process.env.PORT || 3000); // listener
app.listen (port);
console.log("app is listening on Port 3000");