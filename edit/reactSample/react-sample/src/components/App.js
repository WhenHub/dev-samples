import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Whencast from './whencast'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accessToken: "LEnX1JDgECCh4B7PuEqy3SMSiUkbjHXKeKleyKzDBbbYyOO9ZloBfEWALkGjEz20", 
      whencastName: [],
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Whencast data={this.state}/>
        </div>
      </div>
    );
  }
  fetchApi(url) {
    
        fetch(url, {
          method: 'Get',
          dataType: 'json',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': this.state.accessToken
          }
        })
        .then((res) => res.json()).then((data) => {
          for (let i = 0; i < data.length; i++){
            this.setState({
              whencastName: this.state.whencastName.concat(data[i].name)
            })
            
          }
          console.log(this.state.whencastName)
        })
    
        // .catch((err) => console.log('Movie not found!'))
    
  } 


  componentDidMount() {
    let url = `https://api.whenhub.com/api/users/me/schedules`
    this.fetchApi(url)
  }

}

export default App;

