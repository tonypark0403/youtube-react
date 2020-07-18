import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from '../../components/video';
const searchingBy = 'movie';

const Search = ({ routes }) => {
  // get data from server
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000${routes.videos}${routes.search}`)
      .then(res => setVideos(res.data.data.videos));
    // (async function () {
    //   data = await axios.get('http://localhost:5000');
    //   console.log(data);
    // })();
  }, [routes]);
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

Search.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default Search;
