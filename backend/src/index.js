import dotenv from 'dotenv';
import express from 'express';
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
app.use('/uploads', express.static('uploads/'));
app.use(routes.home, globalRouter); // "/"
app.use(routes.users, userRouter); // "/users"
app.use(routes.videos, videoRouter); // "/videos"
// app.use(routes.temp, tempRouter);

app.listen(PORT, () => {
  console.log(`welcome to my server, http://localhost:${PORT}`);
});
