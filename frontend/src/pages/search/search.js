import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../../components/video';
const searchingBy = 'movie';

const Search = () => {
  // get data from server
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/videos/search`)
      .then(res => setVideos(res.data.data.videos));
    // (async function () {
    //   data = await axios.get('http://localhost:5000');
    //   console.log(data);
    // })();
  }, []);
  return (
    <>
      <div className="search__header">
        <h3>Searching for: {searchingBy}</h3>
      </div>
      <div className="search__videos">
        {videos &&
          videos.map(video => (
            <Video
              key={video.id}
              videoFile={video.videoFile}
              title={video.title}
              views={video.views}
            />
          ))}
      </div>
    </>
  );
};

export default Search;
