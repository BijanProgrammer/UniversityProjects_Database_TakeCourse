const express = require('express');
const router = express.Router();

const database = require('./database');

// @route	GET		api/students
// @desc	Get All Students
// @acess	Public
router.get('/', (req, res) => {
	let command = 'SELECT * FROM student;';
	database.query(command, (err, result) => {
		if (err) {
			console.error('Cannot SELECT students data !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
		} else {
			res.send(result);
		}
	});
});

// @route	GET		api/students
// @desc	Get One Student
// @acess	Public
router.get('/:id', (req, res) => {
	let command = 'SELECT * FROM student WHERE ID=' + req.params.id;
	database.query(command, (err, result) => {
		if (err) {
			console.error('Cannot SELECT student data !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
		} else {
			res.send(result);
		}
	});
});

// @route	POST	api/students
// @desc	Add or Update Student
// @acess	Public
router.post('/', (req, res) => {
	const { ID, name, dept_name, tot_cred } = req.body;

	let command = 'SELECT * FROM student WHERE ID=' + ID;

	database.query(command, (err, result) => {
		if (err) {
			console.error("Cannot SELECT 'student' data !" + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
		} else if (result.length > 0) {
			command =
				'UPDATE student ' +
				"SET ID='" +
				ID +
				"'," +
				"name='" +
				name +
				"'," +
				"dept_name='" +
				dept_name +
				"'," +
				'tot_cred=' +
				tot_cred +
				' WHERE ID=' +
				ID;

			database.query(command, (err) => {
				if (err) {
					console.error('Cannot UPDATE the student !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
				} else {
					let student = { ID: ID, name: name, dept_name: dept_name, tot_cred: tot_cred };
					res.send(student);
				}
			});
		} else {
			command =
				"INSERT INTO student VALUE ('" + ID + "', '" + name + "', '" + dept_name + "', " + tot_cred + ');';

			database.query(command, (err) => {
				if (err) {
					console.error('Cannot INSERT new student !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
				} else {
					let student = { ID: ID, name: name, dept_name: dept_name, tot_cred: tot_cred };
					res.send(student);
				}
			});
		}
	});
});

// @route	DELETE	api/students
// @desc	Delete Student
// @acess	Public
router.delete('/:id', (req, res) => {
	let command = 'DELETE FROM student WHERE ID=' + req.params.id;

	database.query(command, (err) => {
		if (err) {
			console.error('Cannot DELETE the student !' + '\n' + 'Error: ' + JSON.stringify(err, undefined, 4));
		} else {
			res.json({ success: true });
		}
	});
});

module.exports = router;
