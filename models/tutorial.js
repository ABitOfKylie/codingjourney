var orm = require('../config/orm.js');

var tutorialInfo = {
	all: function (cb) {
		orm.all('tutorials', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('tutorials', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('tutorials', objColVals, condition, function (res) {
			cb(res);
		});
	},

	delete: function (cb) {
        orm.delete('tutorials',function (res) {
            cb(res);
        });
    }
};

module.exports = tutorialInfo;
