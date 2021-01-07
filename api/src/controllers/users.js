const { User } = require('../db');

const createOne = (role, avatar, firstName, lastName, birthdate, password, googleId) => {
  return new Promise((resolve, reject) => {
    if (password && password.includes(" ")) {
      return reject({
        error: {
          message: "La contraseña no puede tener espacios en blanco"
        },
      });
    }

    User.create({ avatar, firstName, lastName, birthdate, password, googleId })
      .then((user) => {
        if(role) {
          if(role !== "ADMIN" && role !== "GUEST") {
            return reject({
              error: "Los campos para el rol son ADMIN o GUEST",
            });
          }
          user.role = role;
          user.save();
        }
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