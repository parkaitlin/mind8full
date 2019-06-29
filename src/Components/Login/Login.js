import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../../style';
import * as routes from '../constants/routes';

const LoginPage = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
    h2 {
        font-size: 5em;
        letter-spacing: .08em;
        font-family: 'Quicksand', sans-serif;
        color: rgb(20, 139, 159);
        margin-bottom: .5em;
        animation: trackingInExpand 3s;
    }
    .message {
        visibility: hidden;
    }
    @keyframes trackingInExpand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

`
const LoginBox = styled.div`
    font-family: 'Catamaran', sans-serif;
    animation: focusIn 2s;
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
        height: 3em;
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
            : <Wrapper>
                <LoginPage>
                    <h2 className='welcome'>WELCOME</h2>
                    <p className='message'>{message}</p>
                    <LoginBox>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' name='email' placeholder='email' value={email} onChange={this.handleChange} /><br/>
                            <input type='password' name='password' placeholder='password' value={password} onChange={this.handleChange} /><br/>
                            <button type='submit'>login</button>
                        </form>
                        <p>First time visitor? Create an account <Link to={routes.REGISTER} className="here">here</Link></p>
                    </LoginBox>
                </LoginPage>
            </Wrapper>
        )
    }
}

export default Login;