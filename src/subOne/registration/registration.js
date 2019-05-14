import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Registration extends Component {
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('form submitted')
    }
    render(){
        return(
            <div className="registration-container">
            <div>
                <h4>create an account</h4>
                <form onSubmit={this.handleSubmit}>
                    first name*: <input type='text' name='firstName' /><br/>
                    last name (optional): <input type='text' name='lastName' /><br/>
                    email*: <input type='text' name='email' /><br/>
                    password: <input type='password' name='password' /><br/>
                    <button type='submit'>Create!</button>
                </form>
                <p>* required</p>
            </div>
            </div>
        )
    }
}

export default Registration;