import Video from '../models/video';
import * as videoService from '../services/videoService';
import { returnNormalJson } from '../utils';

export const home = async (req, res) => {
  console.log(res.locals);
  const videos = await Video.find();
  const data = {
    videos,
    ...res.locals,
  };
  returnNormalJson(res, data, 200);
};

export const search = async (req, res) => {
  const searchingBy = req.query.term;
  const videos = await Video.find({ title: searchingBy });
  returnNormalJson(
    res,
    {
      pageTitle: 'Search',
      searchingBy,
      videos,
    },
    200,
  );
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

export const videoDetail = async (req, res) => {
  const { id } = req.params;
  const video = await videoService.getVideoById(id);
  returnNormalJson(res, { video });
};

export const videoUpdate = async (req, res) => {
  const { id } = req.params;
  console.log('videoUpdate:', req.body);
  const video = await videoService.updateVideoById(id, req.body);
  returnNormalJson(res, { video });
};

export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
