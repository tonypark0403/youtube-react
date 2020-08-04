import express from 'express';
import routes from '.';
import * as videoController from '../controllers/videoController';
import * as userController from '../controllers/userController';
import auth, { passportAuth } from '../middlewares/passport/auth';

const globalRouter = express.Router();

// globalRouter.get(routes.check, auth.required, userController.check);
globalRouter.get(routes.check, userController.check);
globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.post(routes.join, userController.postJoin);
globalRouter.post(routes.login, passportAuth, userController.afterLogin);
globalRouter.get(routes.logout, userController.logout);

export default globalRouter;
