import express from 'express';
import tempRouter from './routes/tempRouter';

const app = express();

// routing
app.use('/temp', tempRouter);

app.listen(5000, function () {
  console.log(`welcome to my server, http://localhost:5000`);
});
