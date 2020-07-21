import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/layouts/main';
import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search/';
import Upload from './pages/upload/';

function App() {
  const [routes, setRoutes] = useState({});
  // let data;
  useEffect(() => {
    axios.get('http://localhost:5000/').then(res => setRoutes(res.data.routes));
    // (async function () {
    //   data = await axios.get('http://localhost:5000');
    //   console.log(data);
    // })();
  }, []);
  console.log(routes);
  return (
    <Main routes={routes}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route
          exact
          path={`${routes.videos}${routes.search}`}
          render={() => <Search routes={routes} />}
        />
        <Route
          exact
          path={`${routes.vidoes}${routes.upload}`}
          component={Upload}
        />
      </Switch>
    </Main>
  );
}

export default App;
