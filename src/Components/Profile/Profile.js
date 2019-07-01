import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Calendar from './calendar';
import Modal from './modal';
import { Wrapper } from '../../style';
import { ProfilePage } from './style';
// import EntryModal from './entryModal';
// import ProfileModal from './profileModal';

class Profile extends Component {
    state = {
        entryModal: false,
        profileModal: false,
        key: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    viewModal = (e, info)=>{
        this.setState({
            [e.target.name]: true,
            key: info
        })
    }
    closeModal = (e)=>{
        this.setState({
            [e.target.name]: false,
            key: 0
        })
    }
    deleteEntry = async ()=>{
        try {
            const data = await fetch(`/entry/${this.props.currentUser.journal[this.state.key]._id}`, {
                method: 'DELETE',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedData = await data.json();
            this.setState({
                entryModal: false,
            })
            this.props.updateUser(parsedData.user);
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    editProfile = ()=>{
        this.setState({
            profileModal:false
        })
        this.props.editUser(this.state)
    }
    render(){
        const {key, entryModal, profileModal, firstName, lastName, email, password} = this.state
        const {logged, currentUser} = this.props
        return(
            logged 
            ? <Wrapper>
                <ProfilePage>
                    <div className="left-side">
                        <div className='user-info'>
                            <h3>{currentUser.firstName}</h3>
                            <h5>{currentUser.level}</h5>
                            <button name="profileModal" onClick={(e)=>this.viewModal(e, 0)}>edit profile</button>
                        </div>
                        <div className='cal-jour'>
                            <div className='calendar'>
                                <Calendar />
                                <h4 className="check-in">total check-ins: {currentUser.calendar.length}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='journal'>
                        <h4>contents</h4>
                        {this.props.currentUser.journal.map((entry, i)=>{
                            return(
                                <ul>
                                    <li><button name="entryModal" key={entry._id} className='entry' onClick={(e)=>this.viewModal(e, i)}>{entry.title} {entry.date}</button></li>
                                </ul>
                            ) 
                        })}
                    </div>
                    </ProfilePage>

                    <Modal show={profileModal} close={this.closeModal} name='profileModal'>
                        <ul className="profile-modal">    
                            <li>First Name: <input type='text' name="firstName" placeholder={currentUser.firstName} value={firstName} onChange={this.handleChange}/></li>
                            <li>Last Name: <input type='text' name="lastName" placeholder={currentUser.lastName} value={lastName} onChange={this.handleChange}/></li>
                            <li>Email: <input type='text' name="email" placeholder={currentUser.email} value={email} onChange={this.handleChange}/></li>
                            <li>New Password: <input type='password' name="password" value={password} onChange={this.handleChange}/></li>
                        </ul>
                        <button name="profileModal" onClick={this.editProfile}>save changes</button>
                        {/* <button onClick={deleteProfile}>deactivate account</button> */}
                    </Modal>

                    <Modal show={entryModal} close={this.closeModal} name='entryModal'>
                        <ul className="entry-modal">
                            <li>{currentUser.journal.length > 0 ? `"${currentUser.journal[key].quote}"` : 'N/A'}</li>
                            <li><span>prompt: </span>{currentUser.journal.length > 0 ? currentUser.journal[key].prompt : 'N/A'}</li>
                        </ul>
                        <div className="paper">
                            <h4><span>date of entry: </span>{currentUser.journal.length > 0 ? currentUser.journal[key].date : 'N/A'}</h4>
                            <div>{currentUser.journal.length > 0 ? currentUser.journal[key].entry : 'N/A'}</div>
                        </div>
                        <button name="entryModal" onClick={this.deleteEntry}>delete</button>
                    </Modal> 
            </Wrapper>
            : <Redirect to='/' />
        )
    }
}

export default Profile;