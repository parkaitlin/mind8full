import React from 'react';

const ProfileModal = ({closeProfile, deleteProfile, editProfile, userInfo, show, children})=>{
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'
    return(
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                
            </section>
        </div>
    )
}

export default ProfileModal;