import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/layouts/main';
import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search/';
import Upload from './pages/upload/';
import EditVideo from './pages/edit-video';
import UserDetail from './pages/user-detail';

function App() {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users/:id" component={UserDetail} />
        <Route exact path="/videos/search" component={Search} />
        <Route exact path="/videos/upload" component={Upload} />
        <Route exact path="/videos/:id" component={EditVideo} />
        <Redirect from="*" to="/" />
      </Switch>
    </Main>
  );
}

export default App;
