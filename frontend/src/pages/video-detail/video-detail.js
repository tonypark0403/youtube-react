import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Video from '../../components/video';

const VideoDetail = () => {
  const params = useParams();
  const [video, setVideo] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`http://localhost:5000/videos/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        res.data.video.fileUrl =
          'http://localhost:5000/public/' +
          res.data.video.fileUrl.split('\\')[2];
        console.log(res);
        setVideo(res.data.video);
      });
  }, [id]);
  return (
    <div className="video-detail__container">
      <div className="video__player">
        <Video videoFile={video.fileUrl} />
        <div className="video__info">
          <button>
            <Link to={`/videos/${id}/edit`}>Edit video</Link>
          </button>
          <h5 className="video__title">{video.title}</h5>
          <p className="video__description">{video.description}</p>
        </div>
        {video.views === 1 ? (
          <span className="video__views">1 view</span>
        ) : (
          <span className="video__views">{video.views} views</span>
        )}
        <div className="video__comments">
          {video.comments && video.comments.length === 1 ? (
            <span className="video__comment-number">1 comment</span>
          ) : (
            <span className="video__comment-number">
              2 comments{/* {video.comments.length} comments */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
