import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {} from 'bootstrap-icons/font/bootstrap-icons.css'; // Import the Bootstrap icons CSS


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control the collapse

  const toggle = () => setIsOpen(!isOpen); // Function to toggle the collapse

  return (
    <div className="d-flex flex-column flex-shrink-0 p-5 bg-light" style={{width: isOpen ? "280px" : "0", transition: 'width 0.3s ease-in-out'}}>
      <button onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: 'transparent', border: 'none' }}>
        <i className="bi bi-list"/> {/* Render the hamburger icon */}
      </button>
      {isOpen && (
        <>
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="fs-4">Admin Panel</span>
          </a>
          <hr/>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="/admin/track-products" className="nav-link link-dark">
                List Products
              </Link>
            </li>
            <li>
              <Link to="/admin/create-product" className="nav-link link-dark">
                Create Product
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;