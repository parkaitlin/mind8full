import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { async } from 'q';

class Registration extends Component {
    state = {
        firstName: '',
        lastName: '',
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
        this.props.register(this.state)
    }
    render(){
        return(
            this.props.logged
            ? <Redirect to='/home'/>
            : <div className="registration-box">
                <h4>create an account</h4>
                <form onSubmit={this.handleSubmit}>
                    first name*: <input type='text' name='firstName' onChange={this.handleChange} /><br/>
                    last name (optional): <input type='text' name='lastName' onChange={this.handleChange} /><br/>
                    email*: <input type='text' name='email' onChange={this.handleChange} /><br/>
                    password: <input type='password' name='password' onChange={this.handleChange} /><br/>
                    <button type='submit'>Create!</button>
                </form>
                <p>* required</p>
            </div>
        )
    }
}

export default Registration;