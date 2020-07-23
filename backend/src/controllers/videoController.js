import Video from '../models/video';
import { returnNormalJson } from '../utils';

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
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  // To Do: Upload and save video
  console.log(path, title, description);
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });

  console.log(newVideo);
  const data = {
    pageTitle: 'Video Detail',
    videoId: newVideo._id,
  };
  returnNormalJson(res, data);
};
export const videoDetail = (req, res) => res.send('Video Detail');
export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
