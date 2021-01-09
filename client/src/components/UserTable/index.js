import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, removeUser, editUser } from '../../redux/actions/user.js';

import "./UserTable.css";
import User from '../../../../api/src/models/User.js';


function userTable(){
  const dispatch = useDispatch();

  const [makeAdminModal, setMakeAdminModal] = useState(false);
  const [regularUserModal, setRegularUserModal] = useState(false);
  // const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
  //   id: '',
  //   name: '',
  //   description: ''
  // });


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
       <td>{User.id}</td>
       <td>{User.firstName}</td>
       <td>{User.lastName}</td>
       <td>{User.email}</td>
       <td>{User.isAdmin}</td>
       <td id="settings"><button type='button' onClick={()=>function(event){event}}>Edit Role</button></td>
     </tr>
     
   </tbody>
 </table>
 </div>
  )
};

export default userTable;