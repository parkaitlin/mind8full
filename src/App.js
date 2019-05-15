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
import Bear from './snacks/bear';
import Drop from './snacks/drop';
import Munchie from './snacks/munch';
import { async } from 'q';

class App extends Component {
  state = {
    registered: false,
    logged: false,
    password: '',
    message: '',
    name: '',
    bear: '',
    bearCategory: ['inspire', 'inspirational', 'kindness', 'inspiration'],
    drop: '',
    dropCategory: ['motivational', 'positive', 'hopeful', 'optimism'],
    munchie: ''
  }
  register = async (info)=>{
    try {
      const registeredUser = await fetch('/auth/register', {
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
          message: parsedResponse.message  
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
            name: parsedResponse.user.firstName
          })
      } else {
          console.log(parsedResponse.data)
          this.setState({
              password: '',
              message: parsedResponse.message
          })
      }
  } catch (error) {
      console.log(error)
  }
  }
  logout = async () => {
    try {
      const logoutResponse = await fetch('/auth/logout', {
        method: 'POST',
        credentials:'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await logoutResponse.json();
      console.log(parsedResponse)
      this.setState({
        logged: false,
        message: parsedResponse.message
      })
    } catch (error) {
      console.log(error)
    }
  }
  clearMessage = ()=>{
    this.setState({
      message: ''
    })
  }
  getBear = async ()=>{
    const i = Math.floor(Math.random() * 4)
    const category = this.state.bearCategory[i]
    console.log(category)
    try {
      const bearResponse = await fetch(`http://quotes.rest/quote/search.json?category=${category}`, {
        headers: {
          'Accept': 'application/json',
          "X-TheySaidSo-Api-Secret": "a_7pUAPYRGRoIbJmOxMWJweF"
        }
      })
      const parsedResponse = await bearResponse.json()
      console.log(parsedResponse)
      this.setState({
        bear: parsedResponse.contents
      })
    } catch (error) {
      console.log(error)
    }
  }
  getDrop = async ()=>{
    const i = Math.floor(Math.random() * 4)
    const category = this.state.dropCategory[i]
    console.log(category)
    try {
      const dropResponse = await fetch(`http://quotes.rest/quote/search.json?category=${category}`, {
        headers: {
          'Accept': 'application/json',
          "X-TheySaidSo-Api-Secret": "a_7pUAPYRGRoIbJmOxMWJweF"
        }
      })
      const parsedResponse = await dropResponse.json()
      console.log(parsedResponse)
      this.setState({
        drop: parsedResponse.contents
      })
    } catch (error) {
      console.log(error)
    }
  }
  render(){
    const {registered, logged, password, message, name, bear, drop} = this.state
    return (
      <div className="App">
        <div className="container">
          {logged
          ? <NavTwo logout={this.logout} />
          : <NavOne clearMessage={this.clearMessage} />
          }
          <Switch>
            <Route exact path={routes.LOGIN} render={() => <Login logged={logged} password={password} message={message} login={this.login} />} />
            <Route exact path={routes.REGISTER} render={()=> <Registration logged={logged} message={message} register={this.register} />} />
            <Route exact path={routes.HOME} render={()=> <Home getBear={this.getBear} getDrop={this.getDrop} logged={logged} registered={registered} name={name} />} />
            <Route exact path={routes.ABOUT} render={()=> <About />} />
            <Route exact path={routes.PROFILE} render={()=> <div>Profile | Calendar | Journal</div>} />
            <Route exact path={routes.BEAR} render={()=> <Bear bear={bear} />} />
            <Route exact path={routes.DROP} render={()=> <Drop drop={drop} />} />
            <Route exact path={routes.MUNCH} render={()=> <div>Something to Munch on...</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
