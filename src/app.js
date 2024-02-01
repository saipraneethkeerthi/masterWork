const express = require('express');
const db = require('./dbConnect');
const menuRoutes = require('./routes/menuRoutes');
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.use(jsonParser);
app.use(menuRoutes);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
