import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="container">
        <h2>Login</h2>
        <form>
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
        <p className="forgot-password text-right">
          Forgot <Link to="/forgot-password">password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;