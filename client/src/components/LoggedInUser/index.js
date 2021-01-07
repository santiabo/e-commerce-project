import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/actions/user';
import { useForm } from 'react-hook-form';

// Styles
import './styles.css';
import { MdAccountCircle } from "react-icons/md";

const LoggedInUser = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const dispatch = useDispatch();

  const onSubmit = (user) => {
    dispatch(signOutUser(user));
  };

  return (
    <Dropdown className='Dropdown' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className='DropdownToggle'>
        <MdAccountCircle className='Avatar' />
      </DropdownToggle>

      <DropdownMenu right>
        <DropdownItem className='UserName'>Maggie</DropdownItem>

        <DropdownItem divider />

        <DropdownItem>
          <Link to='/user/account' className='LinkItem'>Profile</Link>
        </DropdownItem>

        <DropdownItem>
          <Link to='/user/orders' className='LinkItem'>Orders</Link>
        </DropdownItem>

        <DropdownItem>
          <Link to='/user/reviews' className='LinkItem'>Reviews</Link>
        </DropdownItem>

        <DropdownItem divider />

        <DropdownItem>
          <Link to='/' className='LinkItem' onClick={onSubmit}>Log Out</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LoggedInUser;