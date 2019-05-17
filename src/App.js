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
import ProfilePage from './profile/profilePage';
// import { async } from 'q';

class App extends Component {
  state = {
    registered: false,
    logged: false,
    password: '',
    message: '',
    name: '',
    bear: '',
    bearCategory: ['inspire', 'inspirational', 'kindness', 'inspiration', 'determined', 'grit', "inspirational-attitude", "inspirational-happiness"],
    drop: '',
    dropCategory: ['motivational', 'positive', 'hopeful', 'optimism', 'happiness', 'compassion', 'perseverance'],
    munchie: '',
    currentUser: ''
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
          name: parsedResponse.user.firstName,
          currentUser: parsedResponse.user
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
            name: parsedResponse.user.firstName,
            currentUser: parsedResponse.user
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
    const i = Math.floor(Math.random() * 8)
    const category = this.state.bearCategory[i]
    console.log(category)
    try {
      const data = await fetch(`/user/${category}`, {
        credentials: 'include'
      });
      const parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        bear: parsedData.data.contents
      })
      
    } catch (error) {
      console.log(error)
    } 
  }
  getDrop = async ()=>{
    const i = Math.floor(Math.random() * 7)
    const category = this.state.dropCategory[i]
    console.log(category)
    try {
      const data = await fetch(`/user/${category}`, {
        credentials: 'include'
      });
      const parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        drop: parsedData.data.contents
      })
    } catch (error) {
      console.log(error)
    }
  }
  getMunchie = async ()=>{
    try {
      const data = await fetch('/user/random', {
        credentials: 'include'
      });
      const parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        munchie: parsedData.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  updateUser = (info)=>{
    console.log('updated user')
    this.setState({
      currentUser: (info)
    })
  }
  render(){
    const {registered, logged, password, message, name, bear, drop, munchie, currentUser} = this.state
    return (
      <div className="App">
        <div className="container">
          {logged
          ? <NavTwo logout={this.logout} getUser={this.getUser} />
          : <NavOne clearMessage={this.clearMessage} />
          }
          <Switch>
            <Route exact path={routes.LOGIN} render={() => <Login logged={logged} password={password} message={message} login={this.login} />} />
            <Route exact path={routes.REGISTER} render={()=> <Registration logged={logged} message={message} register={this.register} />} />
            <Route exact path={routes.HOME} render={()=> <Home getBear={this.getBear} getDrop={this.getDrop} getMunchie={this.getMunchie} logged={logged} registered={registered} name={name} />} />
            <Route exact path={routes.ABOUT} render={()=> <About />} />
            <Route exact path={routes.PROFILE} render={()=> <ProfilePage logged={logged} currentUser={currentUser} updateUser={this.updateUser} />} />
            <Route exact path={routes.BEAR} render={()=> <Bear bear={bear} />} />
            <Route exact path={routes.DROP} render={()=> <Drop drop={drop} />} />
            <Route exact path={routes.MUNCH} render={()=> <Munchie munchie={munchie} updateUser={this.updateUser} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
