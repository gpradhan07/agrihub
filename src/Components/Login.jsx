import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../Service/api';

import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await signIn(username, password);
      const jwtToken = data.token;

      // Redirect to the landing page
      navigate('/landing');
    } catch (error) {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div>
      <header className="Header">
        <h2 className="Header-title">AGRIHUB</h2>
      </header>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1 centered-input"
                placeholder="Enter Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1 centered-input"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-info btn-sm mt-4 pt-2 w-50 mx-auto fw-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Login;
