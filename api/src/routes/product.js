const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

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

module.exports = server;
