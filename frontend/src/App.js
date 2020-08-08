import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/layouts/main';
import Home from './pages/home';
import Join from './pages/join';
import Login from './pages/login';
import Search from './pages/search/';
import Upload from './pages/upload/';
import EditVideo from './pages/edit-video';
import UserDetail from './pages/user-detail';
import Logout from './pages/logout';

function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/check', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => {
        console.log('from backend data:', res);
        if (res.status === 'ok') {
          setAuth(res.data.isAuthenticated); // true
          // setEmail(''); // causing error that Can't perform a React state update on an unmounted component. This is a no-op
          // setPassword('');
        }
      });
  }, []);

  const privateRouter = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/logout"
        render={props => <Logout {...props} setAuth={setAuth} />}
      />
      <Route exact path="/users/:id" component={UserDetail} />
      <Route exact path="/videos/search" component={Search} />
      <Route exact path="/videos/upload" component={Upload} />
      <Route exact path="/videos/:id" component={EditVideo} />
      <Redirect from="*" to="/" />
    </Switch>
  );
  const publicRouter = () => (
    <Switch>
      <Route
        exact
        path="/join"
        render={props => <Join {...props} setAuth={setAuth} />}
      />
      <Route
        exact
        path="/login"
        render={props => <Login {...props} setAuth={setAuth} />}
      />
      <Redirect from="*" to="/login" />
    </Switch>
  );
  return (
    <Main isAuth={isAuth}>{isAuth ? privateRouter() : publicRouter()}</Main>
  );
}

export default App;
