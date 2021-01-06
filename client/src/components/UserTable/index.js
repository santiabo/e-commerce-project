import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import "./UserTable.css";


function userTable(){
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
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>1</td>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>
     <tr>
       <td>2</td>
       <td>Jacob</td>
       <td>Thornton</td>
       <td>@fat</td>
     </tr>
     <tr>
       <td>3</td>
       <td colSpan="2">Larry the Bird</td>
       <td>@twitter</td>
     </tr>
   </tbody>
 </table>
 </div>
  )
};

export default userTable;