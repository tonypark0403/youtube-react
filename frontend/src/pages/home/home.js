import React from 'react';
import { videos } from './data';

const Home = () => (
  <div className="videos">
    {videos.map(video => (
      <>
        <h1>{video.title}</h1>
        <p>{video.description}</p>
      </>
    ))}
  </div>
);

export default Home;
