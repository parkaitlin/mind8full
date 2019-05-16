import React, {Component} from 'react';
import { async } from 'q';

class ProfilePage extends Component {
    state = {
        journal: [],
        session: []
    }
    getEntries = async ()=>{
        
    }
    render(){
        return(
            <div>
                <div className='user-info'>
                    <h3>NAME</h3>
                </div>
                <div className='calendar'>
                    <h4>CALENDAR</h4>
                </div>
                <div className='journal'>
                    <h4>JOURNAL</h4>
                </div>
            </div>
        )
    }
}

export default ProfilePage;