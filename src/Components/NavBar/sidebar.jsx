import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';


const SideBarBox = styled.div`

    .hide-bar {
        height: 100vh;
        width: 0;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow: hidden;
        transition: 0.8s;
        z-index: 1; 
    }
    .hide-bar > div, .hide-bar > ul {
        opacity: 0;
        transition: .1s;
        
    }
    .show-bar > div, .show-bar > ul {
        animation: fadeIn 1.2s;
    }
    .show-bar {
        height: 100vh;
        width: 23vw;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow: hidden;
        transition: .6s;
        z-index: 1;
    }
    li {
        list-style: none;
    }
    .navbar-link {
        text-decoration: none;
        font-family: 'Catamaran', sans-serif;
        font-size: 2em;
        color: #777; 
        margin: 1.5em 0 0 1.5em;
    }
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 1.5em 2em;
    }
    p {
        font-family: 'Quicksand', sans-serif;
        font-size: 1.5em;
        color: rgb(20, 139, 159);
        align-self: flex-end;
    }
    button {
        font-size: 3em;
        color: rgb(20, 139, 159);
        background-color: transparent;
        border: none;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
            letter-spacing: -.7em
        }
        100% {
            opacity: 1;
        }
    }
    
`
const SideBar = (props)=>{
    const showOrHide = props.show ? 'show-bar' : 'hide-bar'
    return(
        <SideBarBox>
            <div className={showOrHide}>
                <div className='top'>
                    <p className='logo'>mind <FontAwesomeIcon icon={faInfinity} className="icon"/> full</p>
                    <button onClick={props.closeBar}>&times;</button>
                </div>
                <ul>
                    <li><NavLink to={routes.ABOUT} className='navbar-link' activeClassName='active' onClick={props.clearMessage}>about</NavLink></li>
                {
                    props.logged
                    ? <>
                    <li><NavLink to={routes.HOME} className='navbar-link' activeClassName='active' onClick={props.closeBar} >home</NavLink></li>
                    <li><NavLink to={routes.PROFILE} className='navbar-link' activeClassName='active' onClick={props.closeBar} >journal</NavLink></li>
                    <li><NavLink to={routes.LOGOUT} className='navbar-link' onClick={props.logout}>logout</NavLink></li>
                    </>
                    : <>
                    <li><NavLink to={routes.LOGIN} className='navbar-link' activeClassName='active' onClick={props.clearMessage}>login</NavLink></li>
                    <li><NavLink to={routes.REGISTER} className='navbar-link' activeClassName='active' onClick={props.closeBar} >sign up</NavLink></li>
                    </>
                }
                </ul>
            </div>
        </SideBarBox>
    )
}

export default SideBar;