const server = require('express').Router();
const { Product, Category } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

//POST /products/:idProducto/category/:idCategoria Uni la categoria al producto.

server.post('/:idProducto/category/:idCategoria', (req, res) => {
	const idProducto = req.params.idProducto;
	const idCategoria = req.params.idCategoria;

	var product;
	Product.findByPk(idProducto)
		.then((data) => {
			product = data;
			return Category.findByPk(idCategoria)
		})
		.then((category) => {
			product.addCategories(category)
			res.status(200).send('Category added to Product');
		})
		.catch(err => {
			res.send(err)
		})
})



//DELETE /products/:idProducto/category/:idCategoria(prueba)
server.delete('/:idProducto/category/:idCategoria', (req, res) => {
	const idProducto = req.params.idProducto;
	const idCategoria = req.params.idCategoria;

	var product;
	Product.findByPk(idProducto)
		.then((data) => {
			product = data;
			return Category.findByPk(idCategoria)
		})
		.then((category) => {
			product.removeCategories(category)
			res.status(200).send('Category deleted of the Product');
		})
		.catch(err => {
			res.send(err)
		})
})


//DELETE
server.delete('/category/:id', (req, res) => {
	const { id } = req.params;
	Category.destroy({
		where: { id }
	})
		.then((data) => {
			console.log(data)
			if (!data) {
				res.send('Invalid Category sent')
			} else {
				res.send('Category Deleted')
			}
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
		.then((data) => {
			console.log(data)
			if (!data[0]) {
				res.send('Invalid Category')
			} else {
				return res.status(200).send('Updated')

			}
		})
		.catch(err => {
			res.send('Error:', err)
		})
})


module.exports = server;
