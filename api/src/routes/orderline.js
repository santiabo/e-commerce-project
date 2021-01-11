const server = require('express').Router();
const { isUser } = require('../middlewares/auth');
const { Order, OrderLine, Product } = require('../db.js');

// POST orderLine

server.post('/', isUser, async (req, res) => {

  const { productId, quantity, price, orderId } = req.body;

  const order = await Order.findByPk(orderId);

  if (order) {
    const orderline = await OrderLine.findOne({
      where: {
        productId,
        orderId
      }
    });

    if (orderline) {
      orderline.update({ quantity });

    } else {
      orderline = await OrderLine.create({ productId, quantity, price, orderId });
    }

    const response = await OrderLine.findByPk(orderline.id, {
      include: [
        Order,
        Product
      ]
    });

    res.send(response);

  } else {
    res.sendStatus(400).send('Bad Request');
  }
});

module.exports = server;
