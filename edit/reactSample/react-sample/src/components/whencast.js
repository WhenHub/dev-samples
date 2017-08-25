import React, { Component } from 'react';
class Whencast extends Component {
    render() {
        let data = this.props.data;
        console.log(data);
        return(
            <div className="row">
                {data.map(function(whencast) {
                    return (
                        <div key={whencast.id} className="card">
                            {whencast.media.length > 0 ? (
                                <img src={whencast.media[0].url} alt="Avatar"/>
                            ) : (
                                <img src="https://cdn.whenhub.com/img/logo/logo-square.png" alt="placeholder"/>
                            )}
                            <div class="container">
                                <h4><b>{whencast.name}</b></h4> 
                                <p>{whencast.description}</p> 
                            </div>
                        </div>
                    );
                })}
            </div>        
        );
    }
};




export default Whencast;
