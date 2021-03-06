import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SocialLogin from '../social-login';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    fetch('http://localhost:5000/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(res => {
        console.log('from backend data:', res);
        if (res.status === 'ok') {
          setAuth(res.data.isAuthenticated); // true
          // setEmail(''); // causing error that Can't perform a React state update on an unmounted component. This is a no-op
          // setPassword('');
        }
      });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" value="Log In" />
        <SocialLogin />
      </form>
    </div>
  );
};

Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default Login;
