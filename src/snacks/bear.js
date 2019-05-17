import React from 'react';
import {Redirect} from 'react-router-dom';
import './quote.css'
import {RingLoader} from 'react-spinners';

const Bear = (props)=>{
    return(
        props.logged
        ? 
        <div className="quote">
            <h5>gummy bear</h5>
            <div className='quote-container'>
                <h6>"{props.bear.quote}"</h6>
                <p>-{props.bear.author}</p>
            </div>
            <RingLoader loading={props.loading} />
        </div>
        : <Redirect to='/' />
    )
} 

export default Bear;