import React from 'react';

const SocialLogin = () => (
  <div className="social-login">
    <button className="social-login--github">
      <span>
        <i className="fab fa-github" />
        Continue with Github
      </span>
    </button>
    <button className="social-login--facebook">
      <span>
        <i className="fab fa-facebook" />
        Continue with Facebook
      </span>
    </button>
  </div>
);

export default SocialLogin;
