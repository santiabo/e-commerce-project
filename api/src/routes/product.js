const server = require('express').Router();
const { Product, Category } = require('../db.js');

server.get('/', (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.send(products);
        })
        .catch(next);
});

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
