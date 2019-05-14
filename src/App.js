import React, {Component} from 'react';
import './App.css';

import * as routes from './constants/routes';
import{Switch, Route} from 'react-router-dom';

//NavBar:
import NavOne from './navbars/navOne';
import NavTwo from './navbars/navTwo';

//Components:
import Login from './login/login';
import Registration from './registration/registration';
import Home from './home/home';
import About from './about/about';
import { async } from 'q';

class App extends Component {
  state = {
    registered: false,
    logged: false,
    password: '',
    message: '',
    name: ''
  }
  register = async (info)=>{
    try {
      const registeredUser = await fetch('/user', {
          method: "POST",
          credentials: 'include',
          body: JSON.stringify(info),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      const parsedResponse = await registeredUser.json();
      console.log(parsedResponse)
      if(parsedResponse.data === 'user created'){
        this.setState({
          registered: true,
          logged: true,
          name: parsedResponse.user.firstName
        })
      } else {
        this.setState({
          message: parsedResponse.data  
        })
      }
  } catch (error) {
      console.log(error)
  } 
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
            name: parsedResponse.user.foundUser.firstName
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
    const {registered, logged, password, message, name} = this.state
    return (
      <div className="App">
        <div className="container">
          {logged
          ? <NavTwo />
          : <NavOne />
          }
          <Switch>
            <Route exact path={routes.LOGIN} render={() => <Login logged={logged} password={password} message={message} login={this.login} />} />
            <Route exact path={routes.REGISTER} render={()=> <Registration logged={logged} register={this.register} message={message}/>} />
            <Route exact path={routes.HOME} render={()=> <Home logged={logged} registered={registered} name={name} />} />
            <Route exact path={routes.ABOUT} render={()=> <About />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
