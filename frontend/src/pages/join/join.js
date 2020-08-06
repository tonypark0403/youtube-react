import React, { useState } from 'react';
import SocialLogin from '../social-login';
import { useHistory } from 'react-router-dom';

const Join = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;
      default:
    }
  };
  const handleSubmit = e => {
    console.log('test');
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      password2,
    };
    fetch('http://localhost:5000/join', {
      method: 'post',
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
          setName('');
          setEmail('');
          setPassword('');
          setPassword2('');
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
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="password2"
          placeholder="Verify Password"
          value={password2}
          onChange={handleChange}
        />
        <input type="submit" value="Join Now" />
        <SocialLogin />
      </form>
    </div>
  );
};

export default Join;
