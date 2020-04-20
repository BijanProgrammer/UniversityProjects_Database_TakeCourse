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

// @route	POST	api/students
// @desc	Add New Student
// @acess	Public
router.post('/', (req, res) => {
	const { ID, name, dept_name, tot_cred } = req.body;

	let command = "INSERT INTO student VALUE ('" + ID + "', '" + name + "', '" + dept_name + "', " + tot_cred + ');';

	database.query(command, (err) => {
		if (err) {
			console.error('Cannot INSERT new student !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
		} else {
			let student = { ID: ID, name: name, dept_name: dept_name, tot_cred: tot_cred };
			// (student) => res.json(student);
			res.send(student);
		}
	});
});

module.exports = router;
