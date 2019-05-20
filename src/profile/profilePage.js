import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './profile.css'

import Calendar from './calendar'
import EntryModal from './entryModal';
import ProfileModal from './profileModal';
// import { async } from 'q';

class ProfilePage extends Component {
    state = {
        showEntryModal: false,
        showProfileModal: false,
        amtOfEntries: this.props.currentUser.journal.length,
        key: 0,
        firstName: this.props.currentUser.firstName,
        lastName: this.props.currentUser.lastName,
        email: this.props.currentUser.email,
        password: null
    }
    viewProfile = ()=>{
        this.setState({
            showProfileModal: true
        })
    }
    closeProfile = ()=>{
        this.setState({
            showProfileModal: false
        })
    }
    viewEntry = (info)=>{
        this.setState({
            showEntryModal: true,
            key: info
        })
    } 
    closeEntry = ()=>{
        this.setState({
            showEntryModal: false
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
                showEntryModal: false,
                amtOfEntries: parsedData.user.journal.length
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
    render(){
        const {amtOfEntries, firstName, lastName, email, password} = this.state
        const {logged, currentUser} = this.props
        return(
            logged 
            ? <main>
                <div className='profile-page'>
                    <div className='user-info'>
                        <h3 className='user-name'>{currentUser.firstName}</h3>
                        <h5 className='level'>{currentUser.level}</h5>
                        <button onClick={this.viewProfile}>edit profile</button>
                    </div>
                    <div className='cal-jour'>
                    <div className='calendar'>
                        <Calendar />
                        <h4 className="check-in">total check-ins: {currentUser.calendar.length}</h4>
                    </div>
                    <div className='journal'>
                        <h4>contents</h4>
                        {this.props.currentUser.journal.map((entry, i)=>{
                            return <p key={entry._id} className='entries' onClick={()=>this.viewEntry(i)}>{entry.title} {entry.date}</p>
                        })}
                    </div>
                    </div>
                </div>
                 <ProfileModal show={this.state.showProfileModal} closeProfile={this.closeProfile} deleteProfile={this.props.deleteUser} userInfo={this.state} editProfile={this.props.editUser}>
                    <div className="profile-modal">    
                        first Name: <input type='text' name="firstName" value={firstName} onChange={this.handleChange}/><br/>
                        last Name: <input type='text' name="lastName" value={lastName} onChange={this.handleChange}/><br/>
                        email: <input type='text' name="email" value={email} onChange={this.handleChange}/><br/>
                        password: <input type='password' name="password" value={password} onChange={this.handleChange}/>
                        </div>
                 </ProfileModal>
                 <EntryModal show={this.state.showEntryModal} closeEntry={this.closeEntry} deleteEntry={this.deleteEntry}>
                    <div className="entry-page">
                        <h6 className="modal-quote">quote: {amtOfEntries > 0 ? currentUser.journal[this.state.key].quote : 'N/A'}</h6>
                        <p>prompt: {amtOfEntries > 0 ? currentUser.journal[this.state.key].prompt : 'N/A'}</p>
                        <p>date of entry: {amtOfEntries > 0 ? currentUser.journal[this.state.key].date : 'N/A'}</p>
                        <p>{amtOfEntries > 0 ? currentUser.journal[this.state.key].entry : 'N/A'}</p>
                    </div>
                 </EntryModal> 
             </main>
            : <Redirect to='/' />
        )
    }
}

export default ProfilePage;