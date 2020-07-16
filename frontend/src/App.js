import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/layouts/main';
import Home from './pages/home';
import Login from './pages/login';

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
  return (
    <Main name="tony">
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.login} component={Login} />
      </Switch>
    </Main>
  );
}

export default App;
