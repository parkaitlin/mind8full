import React from 'react';

const EntryModal = ({closeEntry, deleteEntry, show, children})=>{
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'
    return(
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button onClick={closeEntry}>close</button>
                <button onClick={deleteEntry}>delete</button>
            </section>
        </div>
    )
}

export default EntryModal;