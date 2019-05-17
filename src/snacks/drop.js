import React from 'react';
import {Redirect} from 'react-router-dom';
import './quote.css'
import {RingLoader} from 'react-spinners';
const Drop = (props)=>{
    return(
        props.logged
        ? <div className='quote'>
            <h5>cough drop</h5>
            <div className='quote-container'>
                <h6>"{props.drop.quote}"</h6>
                <p>-{props.drop.author}</p>
            </div>
            <RingLoader loading={props.loading} />
        </div>
        : <Redirect to="/" />
    )
} 

export default Drop;