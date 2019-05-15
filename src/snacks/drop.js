import React from 'react';

const Drop = (props)=>{
    return(
        <div>
            <h5>cough drop</h5>
            <div className='quote-container'>
                <h6>"{props.drop.quote}"</h6>
                <p>-{props.drop.author}</p>
            </div>
        </div>
    )
} 

export default Drop;