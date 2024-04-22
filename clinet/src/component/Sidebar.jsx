import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Admin Panel</span>
      </a>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/admin/track-products" className="nav-link link-dark">
            Track Products
          </Link>
        </li>
        <li>
          <Link to="/admin/create-product" className="nav-link link-dark">
            Create Product
          </Link>
        </li>
        <li>
          <Link to="/admin/track-users" className="nav-link link-dark">
            Track Users
          </Link>
        </li>
        <li>
          <Link to="/admin/create-user" className="nav-link link-dark">
            Create User
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;