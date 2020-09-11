import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Video from '../video';

const VideoDesc = ({ id, videoFile, title, views }) => {
  return (
    <div className="videoBlock">
      <Link to={`/videos/${id}`}>
        <Video videoFile={videoFile} />
        <h4 className="videoBlock__title">{title}</h4>
        <h6 className="videoBlock__views">
          {views} {views === 1 ? ' view' : ' views'}
        </h6>
      </Link>
    </div>
  );
};

VideoDesc.propTypes = {
  id: PropTypes.string.isRequired,
  videoFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default VideoDesc;
