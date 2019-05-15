import React from 'react';

const JournalEntry = (props)=>{
    return(
        <div className="paper">
            <p className='date'>{props.date}</p>
            <form>
                <input type="text" name="entry"/>
            </form>
        </div>
    )
}

export default JournalEntry;