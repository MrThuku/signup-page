import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrorMessage('');
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (errors) {
      setErrorMessage(errors);
    } else {
      console.log('Form submitted with values:', formValues);
      navigate('/signup');
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      return 'Please enter a valid email address.';
    }

    if (formValues.password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }

    return '';
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <p style={{ textAlign: 'center' }}>
        <b>Access loans and finances with ease</b>
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          <b>Email Address or Phone Number</b>
        </label>
        <input
          type="text"
          placeholder="Enter Your Email Address"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p className="links">
          Don't have an account?{' '}
          <button type="button" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </p>
        <p>
          <Link to={'/forgot-password'}>Forgot password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;