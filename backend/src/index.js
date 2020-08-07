import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';
import routes from './routes';
import middlewares from './middlewares';
import './models/mongodb';

dotenv.config();
const app = express();
const { PORT } = process.env;

// middlewares
middlewares(app);

// routing
// app.use('/uploads', express.static('uploads/'));
console.log(path.join(__dirname, '../uploads/videos'));
app.use('/public', express.static(path.join(__dirname, '../uploads/videos')));
app.use(routes.home, globalRouter); // "/"
app.use(routes.users, userRouter); // "/users"
app.use(routes.videos, videoRouter); // "/videos"
// app.use(routes.temp, tempRouter);
app.use((req, res, next) => {
  res.send('no urls, bad request');
});
app.listen(PORT, () => {
  console.log(`welcome to my server, http://localhost:${PORT}`);
});
