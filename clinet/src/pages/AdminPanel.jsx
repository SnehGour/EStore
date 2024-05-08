import React from 'react';
import Sidebar from '../component/Sidebar'; // Import the Sidebar component
import ListProducts from '../component/ListProducts';

const AdminPanel = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar /> {/* Render the Sidebar component */}
        </div>
        <div className="col-md-9 mt-3">
          <h2 className='text-center'>Admin Panel</h2>
          <hr />
          <div className="row">
            <div className="col">
              <h3>List Products</h3>
              {/* Here you can list all products and provide options to edit/delete */}
              <ListProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;