import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        logged: false
    }
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submitted');
    }
    render(){
        const {username, password, logged} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                username: <input type='text' name='username' value={username} onChange={this.handleChange} /><br/>
                password: <input type='password' name='password' value={password} onChange={this.handleChange} /><br/>
                <button type='submit'>login</button>
            </form>
        )
    }
}

export default Login;