import React from 'react';
import {Redirect} from 'react-router-dom';


const Home = (props)=>{
    console.log(props.registered)
    console.log(props.logged)
    return(
        props.logged
        ? <div>
            <h2 className='welcome'>welcome</h2>
            {props.registered
            ? <h4>{props.name}</h4>
            : props.logged
            && <h4>back {props.name}</h4>
            }
            <h6>what would you like?</h6>
            <div className='home-links'>
                <h6>a gummy bear</h6>
                <h6>a cough drop</h6>
                <h6>something to munch on ...</h6>
            </div>
        </div>
        : <Redirect to='/' />
    )
}

export default Home;