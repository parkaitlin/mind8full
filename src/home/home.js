import React from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import './home.css'

import * as routes from '../constants/routes';
// import { async } from 'q';

const Home = (props)=>{
    const {registered, logged, name} = props
    return(
        logged
        ? <div className='under-nav'>
            <div className="greeting">
                <h2 className='welcome'>WELCOME</h2>
                {registered
                ? <h4>{name}</h4>
                : props.logged
                && <h4>back {name}</h4>
                }
            </div>  
        <h6>what would you like?</h6>
        <div className='home-links'>
            <NavLink to={routes.BEAR} onClick={props.getBear}>a gummy bear</NavLink>
            <NavLink to={routes.DROP} onClick={props.getDrop}>a cough drop</NavLink>
            <NavLink to={routes.MUNCH} onClick={props.getMunchie}>something to munch on ...</NavLink>
        </div>
    </div>
    : <Redirect to='/' />
    )
}

export default Home;