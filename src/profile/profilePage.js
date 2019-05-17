import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './profile.css'

import Calendar from './calendar'
import EntryModal from './entryModal';
// import { async } from 'q';

class ProfilePage extends Component {
    state = {
        showEntryModal: false,
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
            const data = await fetch(`/user/entry/${this.props.currentUser.journal[this.state.key]._id}`, {
                method: 'DELETE',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedData = await data.json();
            console.log(parsedData)
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        const {logged, currentUser} = this.props
        console.log(logged, this.props.currentUser.journal)
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
                        <h6>quote: {currentUser.journal[this.state.key].quote}</h6>
                        <p>prompt: {currentUser.journal[this.state.key].prompt}</p>
                        <p>date of entry: {currentUser.journal[this.state.key].date}</p>
                        <p>{currentUser.journal[this.state.key].entry}</p>
                    </div>
                 </EntryModal> 
             </main>
            : <Redirect to='/' />
        )
    }
}

export default ProfilePage;