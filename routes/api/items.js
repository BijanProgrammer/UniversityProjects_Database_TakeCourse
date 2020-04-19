const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// Connect to MySQL Database
var database = mysql.createConnection(require('../../config/keys').mysqlURI);

database.connect((err) => {
	if (err) {
		console.error('Cannot Connect to Database !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
	} else {
		console.log('Successfully Connected to MySQL Database !');
	}
});

// @route	GET		api/items
// @desc	Get All Items
// @acess	Public
router.get('/', (req, res) => {
	let command = 'SELECT * FROM student;';
	database.query(command, (err, result) => {
		if (err) {
			console.error("Cannot SELECT 'student' data !" + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
		} else {
			res.send(result);
		}
	});
});

module.exports = router;
