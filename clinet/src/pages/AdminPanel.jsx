import React from 'react';
import Sidebar from '../component/Sidebar'; // Import the Sidebar component

const AdminPanel = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar /> {/* Render the Sidebar component */}
        </div>
        <div className="col-md-9">
          <h2>Admin Panel</h2>

          <div className="row">
            <div className="col">
              <h3>Track Products</h3>
              {/* Here you can list all products and provide options to edit/delete */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Product rows go here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;