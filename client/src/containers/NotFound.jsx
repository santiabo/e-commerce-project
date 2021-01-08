import React from 'react';
import notFound from '../assets/icons/404_page_not_found_.svg';
import '../containers/NotFound.css'

const NotFound = () => (
  <>
    <h1 className = "page">PAGE NOT FOUND</h1>
    <div className="content">
    <img className="notFound" src={notFound}/>
    </div>
  </>
);

export default NotFound;