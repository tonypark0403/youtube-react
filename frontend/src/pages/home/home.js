import React from 'react';
import { videos } from './data';
import Video from '../../components/video';

const Home = () => (
  <div className="videos">
    {videos.map(video => (
      <Video
        key={video.id}
        id={video.id}
        videoFile={video.videoFile}
        title={video.title}
        views={video.views}
      />
    ))}
  </div>
);

export default Home;
