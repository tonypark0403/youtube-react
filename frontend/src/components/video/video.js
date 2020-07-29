import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ id, videoFile, title, views }) => (
  <div className="videoBlock">
    <a href={`/videos/${id}`}>
      <video
        className="videoBlock__thumbnail"
        src={videoFile}
        controls={false}
      />
      <h4 className="videoBlock__title">{title}</h4>
      <h6 className="videoBlock__views">
        {views} {views === 1 ? ' view' : ' views'}
      </h6>
    </a>
  </div>
);

Video.propTypes = {
  id: PropTypes.string.isRequired,
  videoFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Video;
