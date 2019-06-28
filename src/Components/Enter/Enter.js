import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

const Landing = styled.div`
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url('img/landingimg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .cloud {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('img/cloud.png');
    background-size: cover;
    background-position: center;
    animation: animate 60s linear infinite;
    }

    @keyframes animate {
        0% {
            background-position: 0px;
        }
        100% {
            background-position: -5440px;
        }
    }

    h1 {
        margin: 0 0 .3em;
        color: white;
        font-size: 7em;
        font-family: 'Quicksand', sans-serif;
        animation: trackingInExpand 2.7s;
    }
    button {
        font-family: 'Catamaran', sans-serif;
        font-size: 2.5em;
        font-weight: 900;
        border-radius: 10px;
        border: 3px solid white;
        background-color: transparent;
        color: white;
        width: 3.8em;
    }
    button:hover {
        color: rgb(20, 139, 159);
        background-color: white;
        border: 3px solid rgb(20, 139, 159);
    }
    .icon {
        font-size: .7em;
        animation: rotate 4s;
    }
    @keyframes rotate {
        from {transform: rotate(-90deg)}
        to {transform: rotate(0deg)}
    }
    @keyframes trackingInExpand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }

`

const Enter = (props)=>{
    return(
        <Landing>
            <h1>mind<FontAwesomeIcon icon={faInfinity} className="icon"/>full</h1>
            <button onClick={props.enterBtn}>Enter</button>
            <div className="cloud"></div> 
        </Landing>
    )
}

export default Enter
