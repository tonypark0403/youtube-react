import express from 'express';
import routes from '.';
import * as videoController from '../controllers/videoController';
import * as userController from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.get(routes.join, userController.getJoin);
globalRouter.post(routes.join, userController.postJoin);
globalRouter.get(routes.login, userController.login);
globalRouter.get(routes.logout, userController.logout);

export default globalRouter;
