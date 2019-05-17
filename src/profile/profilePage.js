import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './profile.css'

import Calendar from './calendar'
import EntryModal from './entryModal';
// import { async } from 'q';

class ProfilePage extends Component {
    state = {
        showEntryModal: false,
        amtOfEntries: this.props.currentUser.journal.length,
        key: 0
    }
    viewEntry = (info)=>{
        console.log('view entry function')
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
            console.log(parsedData)
            this.setState({
                showEntryModal: false,
                amtOfEntries: parsedData.user.journal.length
            })
            this.props.updateUser(parsedData.user);
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        const {amtOfEntries} = this.state
        const {logged, currentUser} = this.props
        return(
            logged 
            ? <main>
                <div className='profile-page'>
                    <div className='user-info'>
                        <h3>{currentUser.firstName}</h3>
                        <h5>{currentUser.level}</h5>
                        <button>edit profile</button>
                    </div>
                    <div className='calendar'>
                        <Calendar />
                        <h4>total check-ins: {currentUser.calendar.length}</h4>
                    </div>
                    <div className='journal'>
                        <h4>contents</h4>
                        {this.props.currentUser.journal.map((entry, i)=>{
                            return <p key={entry._id} className='entries' onClick={()=>this.viewEntry(i)}>{entry.title} {entry.date}</p>
                        })}
                    </div>
                </div>
                 <EntryModal show={this.state.showEntryModal} closeEntry={this.closeEntry} deleteEntry={this.deleteEntry}>
                    <div className="entry-page">
                        <h6>quote: {amtOfEntries > 0 ? currentUser.journal[this.state.key].quote : 'N/A'}</h6>
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