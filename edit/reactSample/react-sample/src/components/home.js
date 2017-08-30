import React, { Component } from 'react';
import Whencast from './whencast.js';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
        accessToken: "LEnX1JDgECCh4B7PuEqy3SMSiUkbjHXKeKleyKzDBbbYyOO9ZloBfEWALkGjEz20", 
        whencastIds: [],
        whencasts: []
        }
    }

    render() {
        return (
        <div className="Test">
            <div className="container">
            <Whencast data={this.state.whencasts}/>
            </div>
        </div>
        );
    }

    fetchSchedules(url) {
        
            fetch(url, {
            method: 'GET',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.state.accessToken
            }
            })
            .then((res) => res.json()).then((data) => {
            for (let i =0; i < data.length; i++){
                this.setState({
                whencastIds: this.state.whencastIds.concat(data[i].id)
                })
            }
            const ids = this.state.whencastIds;
            for (let i=0; i < ids.length; i++){
                this.fetchScheduleMedia(ids[i]);
            }



            })        
    } 


    fetchScheduleMedia(Id){
        let url = `https://api.whenhub.com/api/schedules/${Id}?filter[include]=media&filter[include][events]=media`
        fetch(url, {
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': this.state.accessToken
        }
        })
        .then((res) => res.json()).then((data) =>{
            this.setState({
            whencasts: this.state.whencasts.concat(data)
            })
        })


    }


    componentDidMount() {
        let url = `https://api.whenhub.com/api/users/me/schedules`
        this.fetchSchedules(url)
    }
}

export default Home;
