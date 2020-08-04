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

export const afterLogin = (req, res, next) => {
  console.log('afterLogin:', req.user);
  const { user } = req;
  const { name, email } = user;
  if (user) {
    const token = user.getToken();
    returnNormalJson(res, { user: { name, email, token } }, 200);
  } else {
    returnErrorJson(res, { message: 'bad request' }, 400);
  }
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
  let data;
  if (res.locals.isAuthenticated) {
    data = {
      name: req.user.name,
      email: req.user.email,
      isAuthenticated: res.locals.isAuthenticated,
    };
    returnNormalJson(res, data, 200);
  } else {
    data = {
      message: 'Not authorized',
      isAuthenticated: res.locals.isAuthenticated,
    };
    returnErrorJson(res, data, 401);
  }
};
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassword = (req, res) => res.send('Change Password');
