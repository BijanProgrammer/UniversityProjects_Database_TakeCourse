const express = require('express');
const router = express.Router();

const database = require('./database');

// @route	GET		api/students
// @desc	Show All Students
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
