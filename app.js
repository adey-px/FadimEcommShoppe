import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';

// Instance of server & env vars
const app = express();
const pre = process.env.API_PREFIX;

// Middlewares
app.use(express.json());
app.use(morgan('tiny'));

// Create product
app.post(`${pre}/product`, (req, res) => {
	const product = req.body;
	res.send(product);
});

// Fetch all products
app.get(`${pre}/products`, (req, res) => {
	const product = {
		id: 1,
		name: 'Corn',
		img: 'some url',
	};
	res.send(product);
});

// Configure dev server
app.listen(5000, () => {
	console.log('Started development server');
});
