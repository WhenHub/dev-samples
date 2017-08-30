import React, { Component } from 'react';
import '../App.css';
import Main from './main.js';

class App extends Component {
  render() {
    return(
      <div>
          <div className="App-header">
            <img src="https://cdn.whenhub.com/img/logo/wh-logo-mark-white.png" alt="logo"/>
          </div>
        <Main />
      </div>
    )
  }


}







export default App;
