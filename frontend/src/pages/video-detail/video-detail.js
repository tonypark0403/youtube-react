import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ id, title, description, fileUrl, views, comments }) => (
  <div className="video-detail__container">
    <div className="video__player">
      <video src={fileUrl}></video>
      <div className="video__info">
        <a href={`/videos/${id}`} />
        <button>Edit video</button>
        <h5 className="video__title">{title}</h5>
        <p className="video__description">{description}</p>
      </div>
      {views === 1 ? (
        <span className="video__views">1 view</span>
      ) : (
        <span className="video__views">{views} views</span>
      )}
      <div className="video__comments">
        {comments.length === 1 ? (
          <span className="video__comment-number">1 comment</span>
        ) : (
          <span className="video__comment-number">
            {comments.length} comments
          </span>
        )}
      </div>
    </div>
  </div>
);

VideoDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
};
export default VideoDetail;
