import User from '../models/user';

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  console.log(name, email, password, password2);
  if (password !== password2) {
    res.status(400);
    res.json({
      status: 'error',
      data: {
        pageTitle: 'Join',
      },
      error: 'Password not matched',
    });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      console.log(user);
      res.json({
        status: 'ok',
        data: {
          pageTitle: 'Join',
          user,
        },
        error: '',
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  if (email === 'test@test.com' && password === 'test') {
    res.json({
      status: 'ok',
      data: {
        pageTitle: 'Login',
        user: {
          email,
        },
      },
      error: '',
    });
  } else {
    res.status(400);
    res.json({
      status: 'error',
      data: {
        pageTitle: 'Login',
      },
      error: 'Bad Request',
    });
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
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassword = (req, res) => res.send('Change Password');
