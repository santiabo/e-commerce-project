const server = require('express').Router();
const { Product, Category, Review } = require('../db.js');

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

server.get('/category', (req, res, next) => {

  Category.findAll({
    order: [
      ['id', 'ASC']
    ]
  })
    .then((categories) => {

      return res.send([...categories]);
    })
    .catch(next);
});

server.route('/:id').get((req, res) => {
  const { id } = req.params;

  getOne(id)
    .then(product => res.json(product))
    .catch(err => res.status(404).json({ err, status: 404 }));
});

// ------- Update Product Route -------
server.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, stock, images } = req.body;
  if(!(req.user && req.user.isAdmin)){ 
    return res.status(401).send('Not Autorized')
  }   
  
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
server.post('/category', (req, res, next) => {
  const { name, description } = req.body;

  Category.create({
    name: name,
    description: description
  })
    .then((category) => {
      res.send({ ...category.dataValues });
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
        res.status(404).send({ error: 'Error: Category Not Found.' });
      } else {
        res.send({ deletedId: id });
      }
    })
    .catch(err => {
      res.send('Error:', err);
    });
});

// ------- Update Category Route -------
server.put('/category/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;
  Category.update({
    name,
    description
  }, {
    where: { id }
  })
    .then(async (data) => {
      if (!data[0]) {
        res.status(404).send({ error: "Error: Category Not Found." });
      } else {

        const category = await Category.findByPk(id);

        return res.send({ ...category.dataValues });
      }
    })
    .catch(next);
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


//-----------Post Product Review Route -----------
server.post('/:id/review', (req, res, next) => {
  const { id } = req.params;
  const { stars, description, userId } = req.body;

  Product.findOne({
    where: {
      id
    }
  }).then(product => {
    if (!product) {
      return res.status(404).send({ error: `Product not found` })
    } else {
      Review.create({
        stars,
        description,
        productId: id,
        userId
      })
        .then(r => {
          res.send({ ...r.dataValues });
        })
        .catch(next);
    }
  })
});

//-----------REVIEWS--------
server.get('/:id/review', (req, res, next) => {
  //devuelve las reviews del producto
  const { id } = req.params;

  Review.findAll({ //busca las reviews
    where: { id } //<-- del producto especifico
  }).then((review) => {
    return res.send(review); //devuelve las reviews
  }).catch(next);
});


server.delete('/:id/review/:idReview', (req, res, next) => {
  //elimina review
  const { id } = req.params;

  Review.destroy({ //destruye
    where: { id } //determinada review
  })
    .then((data) => { //una vez destruida
      if (data) return res.send({ reviewDeleted: Number(id) }); //confirma
      return res.status(404).send({ error: "Review not Found." }); //o envia un error si no la encuentra
    })
    .catch(next); 
});








module.exports = server;
