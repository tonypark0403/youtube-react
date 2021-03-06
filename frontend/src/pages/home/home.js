import React, { useState, useEffect } from 'react';
import VideoDesc from '../../components/videoDesc';

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        const ourData = res.data.videos.map(e => {
          const fileUrl =
            'http://localhost:5000/public/' + e.fileUrl.split('\\')[2];
          return { ...e, fileUrl };
        });
        setVideos(ourData);
      });
  }, []);
  console.log(videos);

  return (
    <div className="home-videos">
      {videos.map(video => (
        <VideoDesc
          key={video._id}
          id={video._id}
          videoFile={video.fileUrl}
          title={video.title}
          views={video.views}
        />
      ))}
    </div>
  );
};

export default Home;
