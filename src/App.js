import React from 'react';
import './App.css';

import * as routes from './constants/routes';
import{Switch, Route} from 'react-router-dom';

//sub container ONE components:
import Login from './subOne/login/login';
import Registration from './subOne/registration/registration';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path={routes.LOGIN} render={() => <Login />} />
      <Route exact path={routes.REGISTER} render={()=> <Registration />} />
    </Switch>
    </div>
  );
}

export default App;
