# Youtube clone

## This project ~ description

### package information

- [x] setup babel : yarn add @babel/core @babel/preset-env @babel/node
- [x] setup eslint : yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier
- [x] setup husky : yarn add -D husky lint-staged eslint-config-airbnb-base eslint-plugin-import

### features

- [x] applied middlewares(helmet, body parser, morgan)
- [x] implemented CRUD service for user

### studying

```
    1. request(url, method, data)
    2. server - index.js => middleware check => router check => controller => model => controller => response
    3. for authorization => before controller, call auth.required
```
