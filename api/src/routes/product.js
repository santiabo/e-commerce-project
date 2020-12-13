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

server.get('/category/', (req, res, next) => {

  Category.findAll()
    .then((categories) => {

      return res.send([...categories]);
    })
    .catch(next);
});

server.route('/:id').get((req, res, next) => {
  const { id } = req.params;

  getOne(id)
    .then(product => res.json(product))
    .catch(next);
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


      return Product.findByPk(id, { include: [Category] });
    })
    .then(product => {
      console.log(product);
      return res.send(product);
    })
    .catch(next);
});

// ------- Delete Product Route -------
server.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Product.destroy({
    where: { id }
  })
    .then((data) => {
      if (data) return res.send({ productDeleted: Number(id) });
      return res.status(404).send({ error: "Product not Found." });
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
    .then(async (category) => {
      await product.addCategories(category);

      // TODO: Ta feo cambiar!
      Product.findByPk(idProducto, { include: [Category] }).then(data => {
        res.send({ ...data.dataValues });
      });
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
    .then(async (category) => {
      await product.removeCategories(category);

      Product.findByPk(idProducto, { include: [Category] }).then(data => {
        res.send({ ...data.dataValues });
      });
    })
    .catch(err => {
      res.send(err);
    });
});

// ------- Add Category Route -------
server.post('/categories', (req, res, next) => {
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
      if (!data[0]) {
        res.send('Invalid Category');
      } else {
        return res.send('Updated');

      }
    })
    .catch(err => {
      res.send('Error:', err);
    });
});

// ------- Products X Category Route -------
server.get("/category/:categoryName", (req, res, next) => {
  const { categoryName } = req.params;

  Product.findAll({
    include: {
      model: Category,
      where: {
        name: categoryName
      }
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = server;
