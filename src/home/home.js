import React from 'react';
import {Redirect, NavLink} from 'react-router-dom';

import * as routes from '../constants/routes';
import { async } from 'q';

const Home = (props)=>{
    const {registered, logged, name} = props
    console.log(registered)
    console.log(logged)
    return(
        logged
        ? <div>
        <h2 className='welcome'>welcome</h2>
        {registered
        ? <h4>{name}</h4>
        : props.logged
        && <h4>back {name}</h4>
        }
        <h6>what would you like?</h6>
        <div className='home-links'>
            <h6><NavLink to={routes.BEAR} onClick={props.getBear}>a gummy bear</NavLink></h6>
            <h6><NavLink to={routes.DROP} onClick={props.getDrop}>a cough drop</NavLink></h6>
            <h6><NavLink to={routes.MUNCH}>something to munch on ...</NavLink></h6>
        </div>
    </div>
    : <Redirect to='/' />
    )
}

export default Home;