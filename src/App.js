import React from 'react';
import './App.css';

import * as routes from './constants/routes';
import{Switch, Route} from 'react-router-dom';

//components
import Login from './login/login';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path={routes.LOGIN} render={() => <Login />} />
    </Switch>
    </div>
  );
}

export default App;
