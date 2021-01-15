const server = require('express').Router();
const nodemailer = require('nodemailer');

server.post('/:id', async (req, res, next) => {

  const { id } = req.params;
  // const { user } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dailytinkerer@gmail.com',
        pass: 'ffpzqhpdrbsmdpcg' // app-specific password
      }
    });

    let info = await transporter.sendMail({
      from: '"PCBuildHub" <dailytinkerer@gmail.com>',
      // to: user,
      to: 'dailytinkerer@gmail.com',
      subject: `Order: ${id}`,
      html: '<a href=`http://localhost:3000/product/1`>Review your product!</a>'
    });

    res.send('Done');
  } catch (error) {
    next(error);
  }
});

module.exports = server;