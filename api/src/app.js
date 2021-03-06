const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const routes = require('./routes/index.js');
const passport = require("./passport");

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', "*"); 
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 
  'Origin, Referer, X-Requested-With, Content-Type, Accept, Accept-Encoding, authorization,  Accept-Language, Connection');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
	next();
});

server.use(passport.initialize());

server.all("*", function (req, res, next) {
  passport.authenticate("bearer", function (err, user) {
    if (err) return next(err);
    if (user) { 
      req.user = user;
    }
    return next();
  })(req, res, next);
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
