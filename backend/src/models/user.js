import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

UserSchema.methods.getToken = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    'secret',
  );
};

const model = mongoose.model('User', UserSchema);

export default model;
