import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once('open', () => console.log('✅  Connected to DB'));
db.on('error', error => console.log(`❌ Error on DB Connection:${error}`));

// export default function () {
//   mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });

//   const db = mongoose.connection;
//   db.once('open', () => console.log('✅  Connected to DB'));
//   db.on('error', error => console.log(`❌ Error on DB Connection:${error}`));
// }
