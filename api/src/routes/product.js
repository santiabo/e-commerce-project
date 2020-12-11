const server = require('express').Router();
const { Product, Category } = require('../db.js');

const {
  getAll,
  createOne,
  getOne,
  editOne,
  deleteOne
} = require('../controllers/products');

// ------- Product Route -------
server.route('/').get((req, res) => {
  const { search } = req.query;

  getAll(search)
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err));
}).post((req, res) => {
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
});

// ------- Update Product Route -------
server.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, stock, images } = req.body;

  Product.update({
    name,
    description,
    price,
    stock,
    images
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
});

// ------- Delete Product Route -------
server.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Product.destroy({
    where: { id }
  })
    .then(() => {
      return res.status(200).send('Product Deleted');
    })
    .catch(next);
});

// ------- Add Product to Category Route -------

server.post('/:idProducto/category/:idCategoria', (req, res) => {
  const idProducto = req.params.idProducto;
  const idCategoria = req.params.idCategoria;

  var product;
  Product.findByPk(idProducto)
    .then((data) => {
      product = data;
      return Category.findByPk(idCategoria);
    })
    .then((category) => {
      product.addCategories(category);
      res.status(200).send('Category added to Product');
    })
    .catch(err => {
      res.send(err);
    });
});

// ------- Delete Category from Product Route -------

server.delete('/:idProducto/category/:idCategoria', (req, res) => {
  const idProducto = req.params.idProducto;
  const idCategoria = req.params.idCategoria;

  var product;
  Product.findByPk(idProducto)
    .then((data) => {
      product = data;
      return Category.findByPk(idCategoria);
    })
    .then((category) => {
      product.removeCategories(category);
      res.status(200).send('Category deleted of the Product');
    })
    .catch(err => {
      res.send(err);
    });
});

// ------- Add Category Route -------
server.post('/category/', (req, res, next) => {
  const { name, description } = req.body;

  Category.create({
    name: name,
    description: description
  })
    .then(() => {
      res.send('Category created');
    })
    .catch(next);
});

// ------- Delete Category Route -------
server.delete('/category/:id', (req, res) => {
  const { id } = req.params;
  Category.destroy({
    where: { id }
  })
    .then((data) => {
      console.log(data);
      if (!data) {
        res.send('Invalid Category sent');
      } else {
        res.send('Category Deleted');
      }
    })
    .catch(err => {
      res.send('Error:', err);
    });
});

// ------- Update Category Route -------
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
      console.log(data);
      if (!data[0]) {
        res.send('Invalid Category');
      } else {
        return res.status(200).send('Updated');

      }
    })
    .catch(err => {
      res.send('Error:', err);
    });
});


module.exports = server;
