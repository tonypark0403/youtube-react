import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/layouts/main';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <Main name="tony">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Main>
  );
}

export default App;
