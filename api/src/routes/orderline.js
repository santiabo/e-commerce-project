const server = require('express').Router();
const { isUser } = require('../middlewares/auth');
const { Order, OrderLine, Product, Category } = require('../db.js');

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
        await OrderLine.update({ quantity: orderline.quantity + quantity }, {
          where: {
            id: orderline.id
          }
        });

      } else {
        await OrderLine.create({ productId, quantity, price, orderId });
      }

      const response = await OrderLine.findAll({
        where: {
          orderId
        },
        include: [
          Order,
          {
            model: Product,
            include: [
              Category
            ]
          }
        ]
      });

      res.send(response);

    } else {
      res.status(400).send("Error: Bad Request");
    }
  } catch (err) {
    console.log(err);
  }

});

module.exports = server;
