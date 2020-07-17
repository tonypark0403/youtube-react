import React from 'react';
import SocialLogin from '../social-login';

const Join = () => (
  <div className="form-container">
    <form action="/join" method="post">
      <input type="text" name="name" placeholder="Full Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="password2" placeholder="Verify Password" />
      <input type="submit" value="Join Now" />
      <SocialLogin />
    </form>
  </div>
);

export default Join;
