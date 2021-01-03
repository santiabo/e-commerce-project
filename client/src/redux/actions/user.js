import axios from 'axios';

// Types
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";

export const POST_USER_CART = "POST_USER_CART";
export const GET_USER_CART = "GET_USER_CART";
export const DELETE_USER_CART = "DELETE_USER_CART";
export const UPDATE_USER_CART = "UPDATE_USER_CART";

//export const PASSWORD_RESET = "PASSWORD_RESET"; 

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user
  };
};

const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  };
};

const getAllUsers = (user) => {
  return {
    type: GET_ALL_USERS,
    user
  };
};


const deleteUser = ({ userDeleted }) => {
  return {
    type: DELETE_USER,
    userDeleted
  };
};


export const postUserCart = (userId) => {
  return {
    type: POST_USER_CART,
    userId
  };
};

export const getUserCart = (id) => {
  return {
    type: GET_USER_CART,
    id
  };
};

export const deleteUserCart = (userId) => {
  return {
    type: DELETE_USER_CART,
    userId
  };
};

const updateUserCart = (id,userCart) => {
  return {
    type: UPDATE_USER_CART,
    id,
    userCart
  };
};


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const createNewUser = (newUser) => {
  return async (dispatch) => {
    try {

      const res = await axios.post(`http://localhost:5000/users`, { ...newUser });

      dispatch(createUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUser = (id, updatedUser) => {
  return async (dispatch) => {
    try {

      const res = await axios.put(`http://localhost:5000/users/${id}`, { ...updatedUser });

      dispatch(updateUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:5000/users`);

      dispatch(getAllUsers(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const removeUser = (id) => {
  return async (dispatch) => {
    try {

      const res = await axios.delete(`http://localhost:5000/users/${id}`);

      dispatch(deleteUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUserCart = (userId) => {
  return async (dispatch) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const res = await axios.post(`http://localhost:5000/users/${userId}/cart`, { ...cart });

      dispatch(postUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUserCartDetail = (userId) => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:5000/users/${userId}/cart`);

      dispatch(getUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeUserCart = (userId) => {
  return async (dispatch) => {
    try {

      const res = await axios.delete(`http://localhost:5000/users/${userId}/cart`);

      dispatch(deleteUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUserCart = (id, userCart) => {
  return async (dispatch) => {
    try {

      const res = await axios.put(`http://localhost:5000/users/${id}/cart`, { ...userCart });

      dispatch(updateUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};