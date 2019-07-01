import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Wrapper } from '../../style';
import { Quote } from './quote';

class Bear extends Component {
    state = {
        bear: '',
        bearCategory: ['inspire', 'inspirational', 'kindness', 'inspiration', 'determined', 'grit', "inspirational-attitude", "inspirational-happiness"],
        loading: true    
    }
    getBear = async ()=>{
        const i = Math.floor(Math.random() * 8)
        const category = this.state.bearCategory[i]
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
        this.getBear().then((data)=>{
            this.setState({
                bear: data.data.contents,
                loading: false
            })
        })
    }
    render(){
        const {logged} = this.props
        const {bear} = this.state
        return(
            logged
            ? <Wrapper>
                <Quote>
                    <h2>gummy bear</h2>
                    <div className='quote-container'>
                        <h4>{bear.quote}</h4>
                        <h5>quote by: {bear.author}</h5>
                    </div>
                </Quote>
            </Wrapper>
        : <Redirect to='/' />
        )
    }
} 

export default Bear;