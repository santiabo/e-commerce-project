const server = require('express').Router();
const { Product, Category } = require('../db.js');
const {
	getAll,
	createOne,
	getOne,
	editOne,
	deleteOne
} = require('../controllers/products');

server
	.route('/')
	.get((req, res) => {

		getAll()
			.then(products => res.status(201).json(products))
			.catch(err => res.status(400).json(err));
	})
	.post((req, res) => {
		const {
			name,
			description,
			price,
			stock,
			images
		} = req.body;

		createOne(name, description, price, stock, images)
			.then(product => res.status(201).json(product))
			.catch(err => res.status(400).json(err));
	})

// ------- Update Route -------
server.put('/products/:id', (req, res, next) => {
	const { id } = req.params;
	const { name, description } = req.body;

	Product.update({
		name,
		description
	}, {
		where: { id }
	})
		.then(data => {
			if (!data) {
				return res.status(400).send({ error: 'Product Not Found' });
			}
			return res.status(200).send(data);
		})
		.catch(next);
})

// ------- Delete Route -------
server.delete('/products/:id', (req, res, next) => {
	const { id } = req.params;

	Product.destroy({
		where: { id }
	})
		.then(() => {
			return res.status(200).send('Product Delete');
		})
		.catch(next);
})

//DELETE
server.delete('/category/:id', (req, res) => {
	const { id } = req.params;
	Category.destroy({
		where: { id }
	})
		.then(() => {
			res.send('Category Deleted')
		})
		.catch(err => {
			res.send('Error:', err)
		})
});

//PUT
server.put('/category/:id', (req, res) => {
	const { id } = req.params;
	const { name, description } = req.body;
	Category.update({
		name,
		description
	}, {
		where: { id }
	})
		.then(() => {
			return res.status(200).send('Updated')
		})
		.catch(err => {
			res.send('Error:', err)
		})
})


module.exports = server;
