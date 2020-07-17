import React from 'react';

const ChangePassword = () => (
  <div className="form-container">
    <form action="/users/changePassword" method="post">
      <input
        type="password"
        name="oldPassword"
        placeholder="Current Password"
      />
      <input type="password" name="newPassword" placeholder="New Password" />
      <input
        type="password"
        name="newPassword1"
        placeholder="Verify New Password"
      />
      <input type="submit" value="Change Password" />
    </form>
  </div>
);

export default ChangePassword;
