import React from 'react';
import {NavLink} from 'react-router-dom';

import * as routes from '../constants/routes';

const NavBarOne = (props)=>
    <div className="navbar">
        <p className='logo'>mind | full</p>
        <div className='navbar-links'>
            <NavLink to={routes.ABOUT} className='navbar-link' activeClassName='active' onClick={props.cleanMessage}>about</NavLink>
            <NavLink to={routes.LOGIN} className='navbar-link' activeClassName='active' onClick={props.cleanMessage}>login</NavLink>
            <NavLink to={routes.REGISTER} className='navbar-link' activeClassName='active'>sign up</NavLink>
        </div>
    </div>

export default NavBarOne;