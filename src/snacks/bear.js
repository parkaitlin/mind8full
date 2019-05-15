import React from 'react';

const Bear = (props)=>{
    return(
        <div>
            <h5>gummy bear</h5>
            <div className='quote-container'>
                <h6>"{props.bear.quote}"</h6>
                <p>-{props.bear.author}</p>
            </div>
        </div>
    )
} 

export default Bear;