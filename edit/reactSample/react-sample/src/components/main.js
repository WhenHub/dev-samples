import React, { Component } from 'react';
import Home from './home.js';
import Edit from './edit.js';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'
  
  class Main extends Component {
    render() {
        return(
            <main>
                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/edit/:id" component={Edit}/>
                    </div>
                </Router>
            </main>
        )
  
    }
}
  

  export default Main;