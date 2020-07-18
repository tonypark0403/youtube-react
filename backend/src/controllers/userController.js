export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.json({
      status: 'error',
      data: {
        pageTitle: 'Join',
      },
      error: 'Bad Request',
    });
  } else {
    res.json({
      status: 'ok',
      data: {
        pageTitle: 'Join',
        user: {
          name,
          email,
        },
      },
      error: '',
    });
  }
};

export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassword = (req, res) => res.send('Change Password');
