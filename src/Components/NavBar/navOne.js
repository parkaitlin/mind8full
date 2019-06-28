import React from 'react';
import {NavLink} from 'react-router-dom';

import * as routes from '../constants/routes';

const NavBarOne = (props)=>
    <div className="navbar nav-one">
        <p className='logo'>mind | full</p>
        <div className='navbar-links'>
            <NavLink to={routes.ABOUT} className='navbar-link' activeClassName='active' onClick={props.clearMessage}>about</NavLink>
            {
            props.logged
            ? <><NavLink to={routes.PROFILE} className='navbar-link' activeClassName='active'>journal</NavLink>
            <NavLink to={routes.LOGOUT} className='navbar-link' onClick={props.logout}>logout</NavLink></>
            : <><NavLink to={routes.LOGIN} className='navbar-link' activeClassName='active' onClick={props.clearMessage}>login</NavLink>
            <NavLink to={routes.REGISTER} className='navbar-link' activeClassName='active'>sign up</NavLink></>
            }
        </div>
    </div>

export default NavBarOne;