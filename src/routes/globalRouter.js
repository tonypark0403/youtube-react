import express from 'express';
import * as globalController from '../controllers/globalController';
import routes from '.';

const globalRouter = express.Router();

// globalRouter.get('/', (req, res) => {
//   res.send('home router');
// });

globalRouter.get(routes.home, globalController.home);

export default globalRouter;
