import React from 'react';

const Home = (props)=>{
    return(
        <div className='container'>
            <h2>Welcome</h2>
            <h5>back {this.props.name}</h5>
            <h6>what would you like?</h6>
            <div className='home-links'>
                <h6>gummy bear</h6>
                <h6>cough drop</h6>
                <h6>something to munch on ...</h6>
            </div>
        </div>
    )
}

export default Home;