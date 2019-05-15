import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.login(this.state)
        this.setState({
            password: this.props.password,
        })
    }
    render(){
        const {email, password} = this.state;
        const {logged, message} = this.props;
        return(
            logged
            ? <Redirect to='/home'/>
            : <div>
                <h2 className='welcome'>welcome</h2>
                <div className="login-box">
                    <form onSubmit={this.handleSubmit}>
                        <p className='message'>{message}</p>
                        email: <input type='text' name='email' value={email} onChange={this.handleChange} /><br/>
                        password: <input type='password' name='password' value={password} onChange={this.handleChange} /><br/>
                        <button type='submit'>login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;