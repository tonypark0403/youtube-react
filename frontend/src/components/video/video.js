import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoFile, title, views }) => (
  <div className="videoBlock">
    <video className="videoBlock__thumbnail" src={videoFile} controls />
    <h4 className="videoBlock__title">{title}</h4>
    <h6 className="videoBlock__views">{views}</h6>
  </div>
);

Video.propTypes = {
  videoFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Video;
