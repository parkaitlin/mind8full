import React, {Component} from 'react';
import styled from 'styled-components';
import SideBar from './sidebar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Bars = styled.div`
    .bars {
        position: fixed;
        font-size: 3em;
        margin: .8em 0 0 .8em;
        color: #2f6276;
        z-index: 1;
    }
`
class NavBar extends Component {
    state = {
        showSideBar: false,
    }
    openBar = ()=>{
        this.setState({
            showSideBar: true
        })
    }
    closeBar = ()=>{
        this.setState({
            showSideBar: false
        })
    }
    render(){
        const {showSideBar} = this.state
        return(
            <Bars>
            {
                !showSideBar
                && <FontAwesomeIcon icon={faBars} className="bars" onClick={this.openBar} />
            }
            <SideBar closeBar={this.closeBar} show={showSideBar} />
            </Bars>
        )
    }
}

export default NavBar;
