import React from 'react';

const CancelEntry = (props)=>{
    return(
        <div>
            <p>Your entry will be lost. are you sure you would like to continue?</p>
            <button>return to entry</button>
            <button>cancel new entry</button>
        </div>
    )
}

export default CancelEntry;