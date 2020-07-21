import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditVideo = () => {
  const params = useParams();
  const { id } = params;
  return (
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
};

export default EditVideo;
