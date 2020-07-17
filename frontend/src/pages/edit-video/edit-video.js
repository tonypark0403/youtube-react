import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditVideo = ({ id }) => (
  <div className="form-container">
    <form action={`/videos/${id}`} method="post">
      <input type="text" name="title" placeholder="Title" />
      <textarea name="description" placeholder="Description"></textarea>
      <input type="submit" value="Update Video" />
    </form>
    <Link
      className="form-container__link form-container__link--delete"
      to="/videos/deleteVideo"
    >
      Delete Video
    </Link>
  </div>
);

EditVideo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditVideo;
