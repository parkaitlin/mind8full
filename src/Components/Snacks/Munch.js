import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import JournalEntry from './Entry';
import { Wrapper } from '../../style';
import { Page, MunchBox } from './style';

class Munch extends Component {
    state = {
        newEntry: false,
        date: '',
        title: '',
        quote: '',
        author: '',
        prompt: '',
        entry: '',
        message: '',
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getMunch = async ()=>{
        try {
          const data = await fetch('/user/random', {
            credentials: 'include'
          });
          const parsedData = await data.json();
          console.log(parsedData)
          return parsedData
        } catch (error) {
          console.log(error)
        }
    }
    componentDidMount(){
        this.getMunch().then(data=>{
            this.setState({
                title: data.data.title,
                quote: data.data.quote,
                author: data.data.author,
                prompt: data.data.prompt
            })
        })
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
        const {date, newEntry, message, title, quote, author, prompt, entry} = this.state
        const {logged} = this.props
        return(
            logged
            ? <Wrapper>
                <Page>
                    <MunchBox>
                        <h5><span>{title}</span> "{quote}" quote by: {author}</h5>
                        <h2>something to munch on...</h2>
                        <p>{prompt}</p>
                {
                    newEntry
                    ? <div className='paper'>
                        <div className='x'>
                            <button className="cancel-btn" onClick={this.cancelNewEntry}>&times;</button>
                        </div>
                        <p>{date}</p>
                        <textarea className='entry-text' rows="14" cols="48" name="entry" placeholder="Start entry here..." value={entry} onChange={this.handleChange} />
                        <button onClick={this.saveEntry}>save entry</button>
                    </div>
                // <JournalEntry munchie={munchie} date={date} cancelNewEntry={this.cancelNewEntry} saveNewEntry={this.saveNewEntry} />
                : <div className="entry"> 
                        <p>{message}</p>
                        <button className='entry-btn' onClick={this.paperForEntry}>new journal entry</button> 
                </div>
                }
                    </MunchBox>
                </Page>
            </Wrapper> 
            : <Redirect to="/" />
        )
    }
}

export default Munch;