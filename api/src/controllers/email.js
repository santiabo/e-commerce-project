const server = require('express').Router();
const nodemailer = require('nodemailer');

server.post('/', async (req, res, next) => {

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dailytinkerer@gmail.com',
        pass: 'ffpzqhpdrbsmdpcg' // app-specific password
      }
    });

    let info = await transporter.sendMail({
      from: 'dailytinkerer@gmail.com',
      to: 'santiabo@gmail.com',
      subject: 'Holiwis',
      text: 'Chauliwis'
    });

    res.send('Done');
  } catch (error) {
    next(error);
  }
});

module.exports = server;