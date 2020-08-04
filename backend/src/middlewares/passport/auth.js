import jwt from 'express-jwt';
import passport from 'passport';

const getTokenFromHeaders = req => {
  const {
    headers: { authorization },
  } = req;

  console.log('authorization:', authorization);

  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  return null;
};

export const passportAuth = passport.authenticate('local', {
  failureRedirect: '/error',
});

const auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    algorithms: ['HS256'],
    getToken: getTokenFromHeaders,
  }),
  //   optional: jwt({
  //     secret: 'secret',
  //     userProperty: 'payload',
  //     algorithms: ['HS256'],
  //     getToken: getTokenFromHeaders,
  //     credentialsRequired: false,
  //   }),
};

export default auth;
