import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SocialLogin from '../social-login';
import { useHistory } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          setAuth(res.data.isAuthenticated);
          setEmail('');
          setPassword('');
          setTimeout(() => {
            history.push('/');
          }, 1000);
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
