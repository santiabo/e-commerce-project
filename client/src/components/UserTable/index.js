import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "./UserTable.css";
import { getUsers, promoteUserRole, degradeUserRole, banUserToOblivion, passwordReset } from '../../redux/actions/user';


function UserTable() {

  const { users } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleClickPromote = (id) => {
    dispatch(promoteUserRole(id));
  };

  const handleClickDegrade = (id) => {
    dispatch(degradeUserRole(id));
  };

  const handleClickBan = (id) => {
    dispatch(banUserToOblivion(id));
  };

  const handlePasswordReset = (id) => {
    dispatch(passwordReset(id));
  };


  return (
    <div className="App">

      <h2 id='prodList' class="alert alert-info">Users List</h2>
      <div id='ordTabl'>
        <Link to='/orders' >
          <button className="btn btn-info">Orders</button>
        </Link>
        <Link to='/admin' >
          <button className="btn btn-info">Products</button>
        </Link>
      </div>
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
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>{u.isAdmin ? 'Admin' : 'User'}</td>
              <td id='settings'>
                <button type='button' className='btn' onClick={() => handleClickPromote(u.id)}>Make Admin</button>
                <br></br>
                <button type='button' className='btn' onClick={() => handleClickDegrade(u.id)}>Demote Admin</button>
                <br></br>
                <button type='button' className='btn' onClick={() => handlePasswordReset(u.id)}>Force Password Reset</button>
                <br></br>
                <button type='button' className='btn' onClick={() => handleClickBan(u.id)}>Ban</button>
                <br></br>
                {/* <button type='button' className='btn'>Delete User</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;