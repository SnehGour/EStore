import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p className="login text-right">
          Already registered <Link to="/login">login?</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;