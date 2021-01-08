const { User } = require('../db');

const createOne = (avatar, firstName, lastName, birthdate, password, googleId) => {
  return new Promise((resolve, reject) => {
    // Verifica si hay password y el password tiene un espacio, envia un mensaje que la contraseña no puede tener espacios en blanco
    if (password && password.includes(" ")) {
      return reject({
        error: {
          message: "La contraseña no puede tener espacios en blanco"
        },
      });
    }

    User.create({ avatar, firstName, lastName, birthdate, password, googleId })
      .then((user) => {
        return user;
      })
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};

const getOneByGoogleId = async (googleId) => {
  try {
    const user = User.findOne({
      where: { googleId },
      
    });
    return user;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getOneByGoogleId,
  createOne
}