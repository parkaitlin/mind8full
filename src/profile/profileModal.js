import React from 'react';
import './modal.css';

const ProfileModal = ({closeProfile, deleteProfile, editProfile, userInfo, show, children})=>{
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'
    return(
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button onClick={closeProfile}>close</button>
                <button onClick={()=> editProfile(userInfo)}>save changes</button>
                <button onClick={deleteProfile}>deactivate account</button>
            </section>
        </div>
    )
}

export default ProfileModal;