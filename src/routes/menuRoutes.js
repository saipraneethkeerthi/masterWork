const express = require('express');
const db = require('../dbConnect');

const app = express();

app.get('/menu', async (req, res) => {
	try {
		const result = await db.query('SELECT * FROM menu');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
});

app.post('/menu', async (req, res) => {
	try {
		let body = req.body;
		console.log(body, 'body');
		const result = await db.query(`INSERT INTO menu (itemname, price)
VALUES ('${body.itemName}','${body.price}')`);
		res.json(result);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
});

app.delete('/menu/:id', async (req, res) => {
	try {
		let id = req?.params?.id;
		const result = await db.query(`DELETE FROM menu
WHERE id = '${id}'`);
		res.json(result);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = app;
