import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../../style';

const LoginPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
    h2 {
        font-size: 4em;
        font-family: 'Quicksand', sans-serif;

    }
`
const LoginBox = styled.div`
    
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
                            email: <input type='text' name='email' value={email} onChange={this.handleChange} /><br/>
                            password: <input type='password' name='password' value={password} onChange={this.handleChange} /><br/>
                            <button type='submit'>login</button>
                        </form>
                    </LoginBox>
                </LoginPage>
            </Wrapper>
        )
    }
}

export default Login;