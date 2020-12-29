const { Router } = require('express');
// import all routers;
const productRouter = require('./product');
const usersRouter = require('./users');
const orderRouter = require('./order');
const authRouter = require("./auth");
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/users', usersRouter);
router.use('/orders', orderRouter);
router.use("/auth", authRouter);

module.exports = router;
