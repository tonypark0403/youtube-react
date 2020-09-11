import User from '../models/user';
import { returnNormalJson, returnErrorJson } from '../utils';

export const postJoin = async (req, res, next) => {
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
      // const token = user.getToken();
      // returnNormalJson(res, { user: { name, email } }, 200);
      next();
    } catch (error) {
      console.log(error);
    }
  }
};

export const afterLogin = (req, res, next) => {
  console.log('afterLogin:', req.user);
  const { user } = req;
  // const { name, email } = user;
  if (user) {
    // const token = user.getToken();
    // returnNormalJson(res, { user: { name, email } }, 200);
    next();
  } else {
    returnErrorJson(res, { message: 'bad request' }, 400);
  }
};

export const logout = (req, res) => {
  req.logout();
  returnNormalJson(res, 'logout successfully');
};

export const check = (req, res) => {
  let data;
  console.log('check:', req.user);
  if (req.user) {
    data = {
      name: req.user.name,
      email: req.user.email,
      isAuthenticated: Boolean(req.user),
    };
    returnNormalJson(res, data, 200);
  } else {
    data = {
      message: 'Not authorized',
      isAuthenticated: Boolean(req.user),
    };
    returnErrorJson(res, data, 401);
  }
};
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassword = (req, res) => res.send('Change Password');
