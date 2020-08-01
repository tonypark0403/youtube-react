import passport from 'passport';
import User from '../models/user';
import { returnNormalJson, returnErrorJson } from '../utils';

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  console.log(name, email, password, password2);
  if (password !== password2) {
    returnErrorJson(res, { error: 'Password not matched' }, 400);
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      console.log(user);
      const token = user.getToken();
      returnNormalJson(res, { user: { name, email, token } }, 200);
    } catch (error) {
      console.log(error);
    }
  }
};

export const postLogin = (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, passportUser, info) => {
    console.log(passportUser);
    const { name, email } = passportUser;
    if (passportUser) {
      // eslint-disable-next-line no-param-reassign
      const token = passportUser.getToken();
      returnNormalJson(res, { user: { name, email, token } }, 200);
    } else {
      returnErrorJson(res, { message: 'bad request' }, 400);
    }
  })(req, res, next);
};

export const logout = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      user: {
        email: '',
      },
    },
    error: '',
  });
};

export const check = (req, res) => {
  res.send('test');
};
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassword = (req, res) => res.send('Change Password');
