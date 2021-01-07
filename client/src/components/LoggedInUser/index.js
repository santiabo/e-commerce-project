import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// Styles
import './styles.css';
import { MdAccountCircle } from "react-icons/md";

const LoggedInUser = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown className='Dropdown' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className='DropdownToggle'>
        <MdAccountCircle className='Avatar' />
      </DropdownToggle>

      <DropdownMenu right >
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
          <Link to='/' className='LinkItem'>Sign Out</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LoggedInUser;