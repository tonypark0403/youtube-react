import Video from '../models/video';

export const postUpload = video => {
  const {
    body: { title, description },
    file: { path },
  } = video;

  // To Do: Upload and save video
  console.log(path, title, description);
  return Video.create({
    fileUrl: path,
    title,
    description,
  });
};

export const getVideoById = id => {
  return Video.findById(id);
};

export const updateVideoById = (id, video) => {
  return Video.findByIdAndUpdate(id, video);
};
