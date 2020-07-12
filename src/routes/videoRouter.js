import express from 'express';
import routes from '.';

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => {
  res.send('video home router');
});

export default videoRouter;
