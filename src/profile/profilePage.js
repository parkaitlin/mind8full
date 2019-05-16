import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './profile.css'

import Calendar from './calendar'
// import { async } from 'q';

class ProfilePage extends Component {
    state = {
        showModal: false,
        key: 0
    }
    viewEntry = (info)=>{
        console.log('view entry function')
        this.setState({
            showModal: true,
            key: info
        })
    } 
    closeModal = ()=>{
        this.setState({
            showModal: false
        })
    }
    render(){
        console.log('right under render')
        const {logged, currentUser} = this.props
        console.log(logged, currentUser.journal)
        return(
            logged 
            ? <div>
                <div className='profile-page'>
                    <div className='user-info'>
                        <h3>{currentUser.firstName}</h3>
                        <h5>(level){currentUser.level}</h5>
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
                {this.state.showModal
                && <div className='entry-modal'>
                    <div className="entry-page">
                        <h6>quote: {currentUser.journal[this.state.key].quote}</h6>
                        <p>prompt: {currentUser.journal[this.state.key].prompt}</p>
                        <p>date of entry: {currentUser.journal[this.state.key].date}</p>
                        <p>{currentUser.journal[this.state.key].entry}</p>
                        <button onClick={this.closeModal}>close</button>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
                }
             </div>
            : <Redirect to='/' />
        )
    }
}

export default ProfilePage;