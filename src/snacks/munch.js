import React, {Component} from 'react';
import JournalEntry from './entry';
// import { async } from 'q';

class Munchie extends Component {
    state = {
        date: '',
        newEntry: false,
        message: ''
    }
    paperForEntry = ()=>{
        console.log('paper!')
        this.setState({
            newEntry: true,
            date: new Date().toDateString()
        })
    }
    saveNewEntry = async (info)=>{
        try {
            const entryResponse = await fetch('/user/entry', {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(info),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await entryResponse.json();
            console.log(parsedResponse);
            this.props.updateUser(parsedResponse.user)
            this.setState({
                newEntry: false,
                message: parsedResponse.message
            })
        } catch (error) {
            console.log(error)
        }
    }
    cancelNewEntry = ()=>{
        this.setState({
            newEntry: false
        })
    }
    render(){
        const {date, newEntry, message} = this.state
        const {munchie} = this.props
        return(
            <div className='munch-box'>
                <h4>{munchie.title}</h4>
                <h6>{munchie.quote}}</h6>
                <h6>-{munchie.author}}</h6>
                <p>something to munch on...</p><br/>
                <p>{munchie.prompt}</p>
                {newEntry
                ? <JournalEntry munchie={munchie} date={date} cancelNewEntry={this.cancelNewEntry} saveNewEntry={this.saveNewEntry} />
                : <div> 
                    <p>{message}</p>
                    <button onClick={this.paperForEntry}>New journal entry</button> 
                </div>
                }
            </div>
        )
    }
}

export default Munchie;