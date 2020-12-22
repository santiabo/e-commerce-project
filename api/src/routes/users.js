const server = require('express').Router();
const { User } = require('../db');

const crypto = require('crypto');

generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

// User creation route

server.post('/', (req, res, next) => {

  const { email, avatar, firstName, lastName, birthdate, password } = req.body;

  const sal = generateSalt();
  const encryptedPassword = encryptPassword(password, sal);

  User.create({ email, avatar, firstName, lastName, birthdate, password: encryptedPassword, salt: sal })
    .then(user => {
      res.send({ ...user.dataValues });
    })
    .catch(next);
});

// User log in route

server.post('/auth/login', (req, res, next) => {

  const { email, password } = req.body;

  User.findOne({
    where: {
      email
    }
  })
    .then(user => {
      const encryptedPassword = encryptPassword(password, user.salt.toString());

      if (user.password === encryptedPassword) {
        res.status(202).send(user);
      }
      res.status(401).send({ Error: 'Wrong password. Please, try again.' });
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
      ['firstName', 'DESC']
    ]
  })
    .then(users => {
      return res.send([...users]);
    })
    .catch(next);
});

// User delete route

server.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  User.destroy({
    where: { id }
  })
    .then(() => {
      return res.send({ UserDeleted: `id: ${Number(id)}` });

    })
    .catch(next);
});

module.exports = server;