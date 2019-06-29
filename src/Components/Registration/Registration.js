import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Wrapper } from '../../style';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const RegisterPage = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
    h2 {
        font-size: 3em;
        letter-spacing: .05em;
        font-family: 'Quicksand', sans-serif;
        color: rgb(20, 139, 159);
        margin-bottom: .5em;
        animation: trackingInExpand 2s;
    } 
`

const RegisterBox = styled.div`
    font-family: 'Catamaran', sans-serif;
    animation: focusIn 2.5s;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p {
        font-size: 1.3em;
        color: rgb(20, 139, 159);
    }
    form {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;
    }
    input {
        width: calc(100% - 5em);
        border-radius: 5px;
        border: none;
        margin: 0 auto;
        height: 2.5em;
        font-size: .8em;
        padding: 0 .5em;
        font-family: inherit;
    }
    button {
        font-family: 'Catamaran', sans-serif;
        font-size: 1.2em;
        font-weight: 600;
        border-radius: 5px;
        border: 3px solid white;
        background-color: transparent;
        color: white;
        width: calc(100% - 3em);
        transition: 0.8s;
        margin: 0 auto;
    }
    button:hover {
        color: rgb(20, 139, 159);
        border: 3px solid rgb(20, 139, 159);
    }
    .here {
        color: #fff;
    }
    @keyframes focusIn {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }
`

class Registration extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        level: 'exploring meditator'
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
        const {logged, message} = this.props
        return(
            logged
            ? <Redirect to='/home'/>
            : <Wrapper>
                <RegisterPage>  
                    <p className='message'>{message}</p>
                    <h2>create an account</h2>
                    <RegisterBox>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' name='firstName' placeholder="first name *" onChange={this.handleChange} /><br/>
                            <input type='text' name='lastName' placeholder="last name (optional)" onChange={this.handleChange} /><br/>
                            <input type='text' name='email' placeholder="email *" onChange={this.handleChange} /><br/>
                            <input type='password' name='password' placeholder="password *" onChange={this.handleChange} /><br/>
                            <button type='submit'>create</button>
                        </form>
                        <div>
                            <p>Already have an account? Login <Link to={routes.LOGIN} className="here">here</Link></p>
                            <p>* required</p>
                        </div>
                    </RegisterBox>
                </RegisterPage>
            </Wrapper>    
        )
    }
}

export default Registration;