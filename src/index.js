import express from 'express';
import tempRouter from './routes/tempRouter';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';
import routes from './routes';

const app = express();
// routing
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);
app.use(routes.temp, tempRouter);

app.listen(5000, () => {
  console.log(`welcome to my server, http://localhost:5000`);
});
