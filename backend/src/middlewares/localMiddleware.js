import multer from 'multer';
import routes from '../routes';

const multerVideo = multer({ dest: 'uploads/videos/' });
export const uploadVideo = multerVideo.single('videoFile');

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'YouTube';
  res.locals.isAuthenticated = false;
  res.locals.routes = routes;
  next();
};

/*

  res = {
    locals: {
      siteName: 'YouTube',
      isAuthenticated: false,
      routes
    }
  }


*/
