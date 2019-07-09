import React, {Component} from 'react';
import styled from 'styled-components';
import SideBar from './sidebar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Bars = styled.div`
    .bars {
        position: fixed;
        font-size: 2em;
        margin: .8em 0 0 .8em;
        color: #2f6276;
        z-index: 1;
    }
`
const NavBar = (props)=>{
    return(
        <Bars>
        {
            !props.show
            && <FontAwesomeIcon icon={faBars} className="bars" onClick={props.openBar} />
        }
        <SideBar clearMessage={props.clearMessage} closeBar={props.closeBar} show={props.show} logged={props.logged} logout={props.logout} />
        </Bars>
    )
}

export default NavBar;
