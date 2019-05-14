import React from 'react';
import {NavLink} from 'react-router-dom';

import * as routes from '../constants/routes';

const NavBarOne = ()=>
    <div className="navbar">
        <p className='logo'>mind | full</p>
        <div className='navbar-links'>
            <NavLink to={routes.ABOUT} activeClassName='active'>about</NavLink>
            <NavLink to={routes.LOGIN} activeClassName='active'>login</NavLink>
            <NavLink to={routes.REGISTER} activeClassName='active'>sign up</NavLink>
        </div>
    </div>

export default NavBarOne;