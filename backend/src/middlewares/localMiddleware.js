import multer from 'multer';
import routes from '../routes';

const multerVideo = multer({ dest: 'uploads/videos/' });
export const uploadVideo = multerVideo.single('videoFile');

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'YouTube';
  res.locals.isAuthenticated = Boolean(req.user);
  res.locals.user = req.user;
  // res.session.routes = routes;
  console.log('localsMiddlewareres:', req.session);
  console.log('localsMiddlewareres:', req.session.user);

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
