import React, {Component} from 'react';
import JournalEntry from './entry';

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
        console.log('clicked')
        this.setState({
            newEntry: true,
            date: new Date().toDateString()
        })
    }
    saveNewEntry = (info)=>{

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
                ? <JournalEntry date={date} />
                : <button onClick={this.paperForEntry}>New journal entry</button>
                }
            </div>
        )
    }
}

export default Munchie;