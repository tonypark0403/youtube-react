import express from 'express';
import routes from '.';

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => {
  res.send('user home router');
});

export default userRouter;
