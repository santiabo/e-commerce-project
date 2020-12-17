const server = require('express').Router();
const { User } = require('../db');


// User creation route

server.post('/', (req, res, next) => {

  User.create(req.body)
    .then(user => {
      res.send({ ...user.dataValues });
    })
    .catch(next);
});


// User update route

server.put('/:id', (req, res, next) => {
  const { id } = req.params;

  User.update(req.body, {
    where: { id }
  })
    .then(async (data) => {
      if (!data[0]) {
        res.status(404).send({ Error: 'User Not Found' });

      } else {
        const user = await User.findByPk(id);
        return res.send({ ...user.dataValues });
      }
    })
    .catch(next);
});


// All users route

server.get('/', (req, res, next) => {
  
  User.findAll({
    order: [
      ['name', 'DESC']
    ]
  })
    .then(users => {
      return res.send([...users]);
    })
    .catch(next);
});


module.exports = server;