import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Wrapper } from '../../style';
import { Quote } from './quote';

class Drop extends Component{
    state = {
        dropCategory: ['motivational', 'positive', 'hopeful', 'optimism', 'happiness', 'compassion', 'perseverance'],
        drop: '',
        loading: true
    }
    getDrop = async ()=>{
        const i = Math.floor(Math.random() * 7)
        const category = this.state.dropCategory[i]
        try {
          const data = await fetch(`/user/${category}`, {
            credentials: 'include'
          });
          const parsedData = await data.json();
          return parsedData
        } catch (error) {
          console.log(error)
        }
    }
    componentDidMount(){
        this.getDrop().then((data)=>{
            this.setState({
                drop: data.data.contents,
                loading: false
            })
        })
    }
    render(){
        const {logged} = this.props
        const {drop} = this.state
        return(
            logged
            ? <Wrapper>
                <Quote>
                    <h2>Cough Drop</h2>
                    <div className='quote-container'>
                        <h4>{drop.quote}</h4>
                        <h5>quote by: {drop.author}</h5>
                    </div>
                </Quote>
            </Wrapper> 
        : <Redirect to="/" />
        )
    }
} 

export default Drop;