const { Router } = require('express');
// import all routers;
const productRouter = require('./product');
const usersRouter = require('./users');
const orderRouter = require('./Order');
const authRouter = require("./auth");
const orderlineRouter = require('./orderline');
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/users', usersRouter);
router.use('/orders', orderRouter);
router.use("/auth", authRouter);
router.use('/orderlines', orderlineRouter);

module.exports = router;
