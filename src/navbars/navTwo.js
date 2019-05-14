import React from 'react';
import {NavLink} from 'react-router-dom';

import * as routes from '../constants/routes';

const NavBarTwo = () =>
    <div className='navbar'>
        <p className='logo'>mind | full</p>
        <NavLink to={routes.ABOUT} className='navbar-link' activeClassName='active'>about</NavLink>
        <NavLink to={routes.HOME} className='navbar-link' activeClassName='active'>home</NavLink>
        <NavLink to={routes.ABOUT} className='navbar-link' activeClassName='active'>journal</NavLink>
        <NavLink to={routes.ABOUT} className='navbar-link' activeClassName='active'>logout</NavLink>
    </div>

export default NavBarTwo;