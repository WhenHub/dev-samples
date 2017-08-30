import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Whencast extends Component {
    render() {
        let data = this.props.data;
        return(
            <div className="row">
                <h1>My Whencasts</h1>
                {data.map(function(whencast) {
                    return (
                        <div key={whencast.id} className="card">
                            {whencast.media.length > 0 ? (
                                <img src={whencast.media[0].url} alt={whencast.name}/>
                            ) : (
                                <img src="https://cdn.whenhub.com/img/logo/logo-square.png" alt="placeholder"/>
                            )}
                            <div className="container">
                                <h4><b>{whencast.name}</b></h4> 
                                <div className="description">
                                    {whencast.description ? (
                                        <p>{whencast.description}</p>
                                    ) : (
                                        <p>This whencast does not have a description</p>
                                    )}
                                        <div className="edit-link">
                                            <Link to={`/edit/${whencast.id}`}>Edit</Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>        
        );
    }
};




export default Whencast;
