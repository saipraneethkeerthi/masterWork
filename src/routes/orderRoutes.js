const express = require('express');
const db = require('../dbConnect');

const app = express();

app.get('/orders', async (req, res) => {
	try {
		const result = await db.query('SELECT * FROM orders');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
});

app.post('/orders', async (req, res) => {
	try {
		let body = req.body;
		console.log(body, 'body');
		const result =
			await db.query(`INSERT INTO orders (customername,menulist,orderprice)
VALUES ('${body.customerName}',
    ARRAY${body.menuList},${body.orderPrice})`);
		res.json(result);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
});

app.delete('/orders/:id', async (req, res) => {
	try {
		let id = req?.params?.id;
		const result = await db.query(`DELETE FROM orders
WHERE id = '${id}'`);
		res.json(result);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = app;
