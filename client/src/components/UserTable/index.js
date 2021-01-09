import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "./UserTable.css";
//import { User } from '../../../../api/src/models/User.js'; <---no se puede
//import { getUsers, removeUser, editUser } from '../../redux/actions/user.js';


function userTable(){
  //const dispatch = useDispatch();


  // const [changeAdmin, setIsAdmin] = React.useState('');

  // const [role, setRole] = React.useState({
  //   isAdmin: false
  // });

  // const btnAdm = function(e) {
  //   setRole({
  //     ...role,
  //     [e.target.name]: e.target.value
  //   });
  // }

  //----iba adentro del boton---
  //onClick={()=>function(event){event}}

  // o
  //name='changeAdmin' onClick={(e) => setIsAdmin(e.target.value)} value = {true}

  // var u = {
  //   email : this.email,
  //   id: this.id,
  //   firstName: this.firstName,
  //   lastName: this.lastName,
  //   isAdmin: false

  // }


  return (
<div className="App">
      
      <Link to='/users' className='mainLink'>
      <h2>User Table</h2>     
      </Link>      
      <br /><br />
      <table className="table table-bordered">
       <thead>
     <tr>
       <th>id</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Role</th>
       <th>Settings</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>1</td>
       <td>fulanito</td>
       <td>ortiz</td>
       <td>fula@fula.com</td>
       <td>Admin</td>
       <td id="settings">
         <button type='button' >Edit Role</button>
         <br></br>
         <button type='button'>Force Password Change</button>
         <br></br>
         <button type='button'>Ban</button>
         <br></br>
         <button type='button'>Remove</button>
       </td>
     </tr>
     
   </tbody>
 </table>
 </div>
  )
};

export default userTable;