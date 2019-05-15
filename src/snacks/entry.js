import React, {Component} from 'react';

// import CancelEntry from '../precautions/cancelEntry'

class JournalEntry extends Component {
    state = {
        date: this.props.date,
        title: this.props.munchie.title,
        quote: this.props.munchie.quote,
        author: this.props.munchie.author,
        prompt: this.props.munchie.prompt,
        entry: ''
    }
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveEntry = ()=>{
        console.log('saved!')
        this.props.saveNewEntry(this.state)
    }
    render(){
        const {entry} = this.state;
        return(
            <div className="paper">
                <p className='date'>{this.props.date}</p>
                    <input type="text" name="entry" value={entry} onChange={this.handleChange} />
                    <button onClick={this.props.cancelNewEntry}>cancel</button>
                    <button onClick={this.saveEntry}>save entry</button>
            </div>
        )
    }
}

export default JournalEntry;