import React, {Component} from 'react';
import JournalEntry from './entry';
import { async } from 'q';

class Munchie extends Component {
    state = {
        date: '',
        title: this.props.munchie.title,
        quote: this.props.munchie.quote,
        author: this.props.munchie.author,
        prompt: this.props.munchie.prompt,
        entry: '',
        newEntry: false
    }
    paperForEntry = ()=>{
        console.log('paper!')
        this.setState({
            newEntry: true,
            date: new Date().toDateString()
        })
    }
    createNewEntry = async ()=>{
        try {
            const entryResponse = await fetch('/entry', {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await entryResponse.json();
            console.log(parsedResponse);
            
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
        const {date, title, quote, author, prompt, newEntry} = this.state
        return(
            <div className='munch-box'>
                <h4>{title}</h4>
                <h6>{quote}}</h6>
                <h6>-{author}}</h6>
                <p>something to munch on...</p><br/>
                <p>{prompt}</p>
                {newEntry
                ? <JournalEntry date={date} cancelNewEntry={this.cancelNewEntry} />
                : <button onClick={this.paperForEntry}>New journal entry</button> 
                }
            </div>
        )
    }
}

export default Munchie;