//import { videos as videoData } from '../models/video_hard_db';
import Video from '../models/video';

export const home = async (req, res) => {
  console.log(res.locals);
  const videos = await Video.find();
  res.json({
    status: 'ok',
    data: { videos },
    error: '',
    ...res.locals,
  });
};

export const search = async (req, res) => {
  const searchingBy = req.query.term;
  const videos = await Video.find({ title: searchingBy });
  res.json({
    status: 'ok',
    data: {
      pageTitle: 'Search',
      searchingBy,
      videos,
    },
    error: '',
  });
};
export const videos = (req, res) => res.send('Videos');
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  console.log(file, title, description);
  const videoId = 324393;
  res.json({
    status: 'ok',
    data: {
      pageTitle: 'Video Detail',
      videoId,
    },
    error: '',
  });
};
export const videoDetail = (req, res) => res.send('Video Detail');
export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
