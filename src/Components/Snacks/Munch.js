import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import JournalEntry from './Entry';

class Munchie extends Component {
    state = {
        date: '',
        newEntry: false,
        message: ''
    }
    paperForEntry = ()=>{
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
        const {munchie, logged} = this.props
        return(
            logged
            ? <div className='munch-box'>
                <h4 className="title">{munchie.title}</h4>
                <h6 className='munch-quote'>"{munchie.quote}"</h6>
                <h6 className= 'author'>-{munchie.author}</h6>
                <p className='munch-slogan'>something to munch on...</p><br/>
                <div className='prompt-newEntry'>
                <div className='prompt-box'><p className='prompt'>{munchie.prompt}</p></div>
                {newEntry
                ? <JournalEntry munchie={munchie} date={date} cancelNewEntry={this.cancelNewEntry} saveNewEntry={this.saveNewEntry} />
                : <div> 
                    <p>{message}</p>
                    <button className='entry-button' onClick={this.paperForEntry}>New journal entry</button> 
                </div>
                }
                </div>
            </div>
            : <Redirect to="/" />
        )
    }
}

export default Munchie;