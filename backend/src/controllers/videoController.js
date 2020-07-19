import { videos as videoData } from '../models/video';

export const home = (req, res) => {
  console.log(res.locals);
  res.json({
    status: 'ok',
    data: '',
    error: '',
    ...res.locals,
  });
};
export const search = (req, res) => {
  const searchingBy = req.query.term;
  res.json({
    status: 'ok',
    data: {
      pageTitle: 'Search',
      searchingBy,
      videos: videoData,
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
