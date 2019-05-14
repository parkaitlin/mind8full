import React, {Component} from 'react';
import './App.css';

import * as routes from './constants/routes';
import{Switch, Route} from 'react-router-dom';

//Components:
import Login from './login/login';
import Registration from './registration/registration';
import Home from './home/home';
import { async } from 'q';

class App extends Component {
  state = {
    logged: false,
    password: '',
    message: '',
    name: ''
  }
  login = async (info)=>{
    try {
      const loginResponse = await fetch('/auth/login', {
          method:"POST",
          credentials: 'include',
          body: JSON.stringify(info),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      const parsedResponse = await loginResponse.json()
      console.log(parsedResponse)
      if(parsedResponse.data === 'login successful'){
          console.log(parsedResponse.data)
          this.setState({
            logged: true,
            name: parsedResponse.user.firstName
          })
      } else {
          console.log(parsedResponse.data)
          this.setState({
              password: '',
              message: 'Unfortunately the login information provided, does not match our records. Please try again.'
          })
      }
  } catch (error) {
      console.log(error)
  }
  }
  render(){
    const {logged, password, message, name} = this.state
    return (
      <div className="App">
      <Switch>
        <Route exact path={routes.LOGIN} render={() => <Login logged={logged} password={password} message={message} login={this.login} />} />
        <Route exact path={routes.REGISTER} render={()=> <Registration logged={logged} />} />
        <Route exact path={routes.HOME} render={()=> <Home logged={logged} name={name} />} />
      </Switch>
      </div>
    );
  }
}

export default App;
