import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

const EditVideo = () => {
  const params = useParams();
  const history = useHistory();
  const [video, setVideo] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`http://localhost:5000/videos/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setVideo(res.data.video);
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('video:', video);
    fetch(`http://localhost:5000/videos/${id}`, {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'ok') {
          history.push(`/videos/${id}`);
        }
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={video.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={video.description}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Update Video" />
      </form>
      <Link className="form-container__link" to={`/videos/deleteVideo/${id}`}>
        Delete Video
      </Link>
    </div>
  );
};

export default EditVideo;
