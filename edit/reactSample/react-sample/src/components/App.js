import React, { Component } from 'react';
import '../App.css';
import Whencast from './whencast'

class App extends Component {
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
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.whenhub.com/img/logo/wh-logo-mark-white.png" alt="logo"/>
        </div>
        <div className="container">
          <h1>Whencasts!</h1>
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
          console.log(this.state.whencastIds)
          const ids = this.state.whencastIds;
          for (let i=0; i < ids.length; i++){
            this.fetchScheduleMedia(ids[i]);
          }



        })
    
        // .catch((err) => console.log('Movie not found!'))
    
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
      console.log(this.state.whencasts)

    })


  }


  componentDidMount() {
    let url = `https://api.whenhub.com/api/users/me/schedules`
    this.fetchSchedules(url)
  }




}

export default App;

