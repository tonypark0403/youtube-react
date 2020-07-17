import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

const EditProfile = ({ id }) => (
  <div className="form-container">
    <form action={`/users/${id}`} method="post">
      <label htmlFor="avatar">Avatar</label>
      <input type="file" id="avatar" name="avatar" />
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="submit" value="Update Profile" />
    </form>
    <Link className="form-container" to="/users/changePassword">
      Change Password
    </Link>
  </div>
);

EditProfile.propTypes = {
  id: Proptypes.string.isRequired,
};
export default EditProfile;
