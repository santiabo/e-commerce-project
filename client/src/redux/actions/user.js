import axios from 'axios';
import { Alert } from 'reactstrap';
import { clearCart, getUserCart } from './cart';


// Types
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";

export const POST_USER_CART = "POST_USER_CART";
export const DELETE_USER_CART = "DELETE_USER_CART";
export const UPDATE_USER_CART = "UPDATE_USER_CART";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const AUTO_LOGIN = "AUTO_LOGIN"

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


const postUserCart = (userCart) => {
  return {
    type: POST_USER_CART,
    userCart
  };
};




const deleteUserCart = (userId) => {
  return {
    type: DELETE_USER_CART,
    userId
  };
};

const updateUserCart = (id, userCart) => {
  return {
    type: UPDATE_USER_CART,
    id,
    userCart
  };
};

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user
  };
};

const logoutUser = (user) => {
  return {
    type: LOGOUT_USER,
    user
  };
};

const autoLoginUser = (user) => {
  return {
    type: AUTO_LOGIN,
    user
  }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//instancia de axios para realizar peticiones con headers que contengan el token
const accessToken = JSON.parse(localStorage.getItem("token"));
export const authAxios = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export const createNewUser = (newUser) => {
  return async (dispatch) => {
    try {

      const res = await axios.post(`http://localhost:5000/users`, { ...newUser });

      dispatch(createUser(res.data));
      alert(`User ${res.data.firstName} created successfully`)
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUser = (id, updatedUser) => {
  return async (dispatch) => {
    try {

      const res = await authAxios.put(`/users/${id}`, { ...updatedUser });

      dispatch(updateUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {

      const res = await authAxios.get(`/users`);

      dispatch(getAllUsers(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const removeUser = (id) => {
  return async (dispatch) => {
    try {

      const res = await authAxios.delete(`/users/${id}`);

      dispatch(deleteUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUserCart = (userId) => {
  return async (dispatch) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const res = await authAxios.post(`/users/${userId}/cart`, { cart });
      dispatch(postUserCart(res.data))
      localStorage.removeItem('cart')
    } catch (err) {
      console.log(err);
    }
  };
};



export const removeUserCart = (userId) => {
  return async (dispatch) => {
    try {

      const res = await authAxios.delete(`/users/${userId}/cart`);

      dispatch(deleteUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUserCart = (id, userCart) => {
  return async (dispatch) => {
    try {

      const res = await authAxios.put(`/users/${id}/cart`, { ...userCart });

      dispatch(updateUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logInUser = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:5000/auth/login`, { ...email, ...password });
     
      const { token, user } = res.data;
   
      dispatch(loginUser(user));
      alert(`Welcome ${user.firstName}!`)
      localStorage.setItem("token", JSON.stringify(token));
      if(localStorage.cart) dispatch(addUserCart(user.id));  
      setTimeout(()=>dispatch(getUserCart(user.id)), 200);  
      
    } catch (err) {
      alert(err.response.data)      
    }
  };
};

export const logOutUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/auth/logout`);
      dispatch(logoutUser())
      dispatch(clearCart())
      localStorage.clear()
      alert("Goodbye");
    }
    catch (err) {
      console.log(err)
    }
  }
};

export const autoSignInUser = () => {
  return async (dispatch) => {
    try {
      const res = await authAxios.get(`/auth/me`);
      const user = res.data;

      dispatch(autoLoginUser(user));
      dispatch(getUserCart(user.id))
    } catch (err) {
      console.log(err);
    }
  };
};

