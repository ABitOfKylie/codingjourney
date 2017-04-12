var tutorials = require('../models/tutorial.js');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.redirect('/tutorials');
});

router.get('/home', function(req, res){	//callback function
	var luckyNumber = Math.round(Math.random()*10);
	res.render("home", {
		luckyNumber: luckyNumber
	});
});

router.get('/about', function(req, res){	//add another route
	res.render("about");
});

router.get('/tutorials', function (req, res) {
	tutorials.all(function (data) {
		var hbsObject = {tutorials: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
			// res.render('home', hbsObject);

	});
});

router.post('/tutorials/create', function (req, res) {
	tutorials.create(['title'], [req.body.title], function () {
		res.redirect('/tutorials');
	});
});

router.put('/tutorials/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	tutorials.update({ addNew: req.body.addNew }, condition, function () {
		res.redirect('/tutorials');
	});
});
router.delete('/tutorials/delete/', function (req, res) {

    tutorials.delete(function () {
        res.redirect('/tutorials');
    });
});

module.exports = router;