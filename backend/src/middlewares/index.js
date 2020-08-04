import dotenv from 'dotenv';
import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import { localsMiddleware } from './localMiddleware';
import './passport';

dotenv.config();

const SessionStore = connectMongo(session);

export default app => {
  app.use(logger('dev'));
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(cors());
  app.use(
    session({
      cookie: {
        maxAge: 60 * 1000,
      },
      secret: process.env.COOKIE_SECRET,
      resave: true,
      saveUninitialized: false,
      store: new SessionStore({ mongooseConnection: mongoose.connection }),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(localsMiddleware);
};
