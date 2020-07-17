import React from 'react';
import SocialLogin from '../social-login';

const Login = () => (
  <div className="form-container">
    <form action="/login" method="post">
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Log In" />
      <SocialLogin />
    </form>
  </div>
);

export default Login;
