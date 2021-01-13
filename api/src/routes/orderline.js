const server = require('express').Router();
const { isUser } = require('../middlewares/auth');
const { Order, OrderLine, Product } = require('../db.js');

// POST orderLine

server.post('/', isUser, async (req, res) => {

  const { productId, quantity, price, orderId } = req.body;

  try {

    const order = await Order.findByPk(orderId);

    if (order) {
      let orderline = await OrderLine.findOne({
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
          Product,
        ]
      });
      console.log("ORDERLINE", response);

      res.send(response);

    } else {
      res.sendStatus(400).send('Bad Request');
    }
  } catch (err) {
    console.log(err);
  }

});

module.exports = server;
