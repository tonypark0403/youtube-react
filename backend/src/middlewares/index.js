import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

export default app => {
  app.use(logger('dev'));
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // customizing middlewares
  app.use((req, res, next) => {
    console.log('sb access to my server');
    next();
  });
};
