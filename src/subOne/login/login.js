import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        logged: false,
        message: '',
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const loginResponse = await fetch('/auth/login', {
                method:"POST",
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await loginResponse.json()
            console.log(parsedResponse)
            if(parsedResponse.data === 'login successful'){
                console.log(parsedResponse.data)
                this.setState({
                    logged: true
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
        const {username, password, logged} = this.state;
        return(
            <div className="login-container">
            <h2>Welcome</h2>
            <form onSubmit={this.handleSubmit}>
                username: <input type='text' name='username' value={username} onChange={this.handleChange} /><br/>
                password: <input type='password' name='password' value={password} onChange={this.handleChange} /><br/>
                <button type='submit'>login</button>
            </form>
            </div>
        )
    }
}

export default Login;