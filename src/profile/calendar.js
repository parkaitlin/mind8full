import React, {Component} from 'react';
import Calendar from 'react-calendar';
import './calendar.css'

class PersonalCalendar extends Component {
    state = {
        date: new Date(),
    }
    handleChange = date => {
        console.log(date)
        this.setState({
            date
        })
    }
    render(){
        const {date} = this.state
        return(
            <div>
                <Calendar
                onChange={this.handleChange}
                date={date}
                />
            </div>
        )
    }
}

export default PersonalCalendar;