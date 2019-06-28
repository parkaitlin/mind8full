import React, {Component} from 'react';


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
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveEntry = ()=>{
        this.props.saveNewEntry(this.state)
        this.setState({
            entry: ''
        })
    }
    render(){
        const {entry} = this.state;
        return(
            <div className="paper">
                <p className='date'>{this.props.date}</p>
                    <input className='entry-input' type="text" name="entry" value={entry} onChange={this.handleChange} />
                    <button onClick={this.props.cancelNewEntry}>cancel</button>
                    <button onClick={this.saveEntry}>save entry</button>
            </div>
        )
    }
}

export default JournalEntry;