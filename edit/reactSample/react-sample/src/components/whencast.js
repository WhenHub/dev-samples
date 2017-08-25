import React, { Component } from 'react';


class Whencast extends Component {
    render() {
        let data = this.props.data;
        console.log(data);
        return(
            <div>
                <h1>Whencasts!</h1>
                {data.map(function(whencast) {
                    return (
                        <div key={whencast.id} className="whencast">
                            {whencast.media.length > 0 &&
                                <img src={whencast.media[0].url} alt="test"/>
                            }
                            <p>{whencast.name}</p>
                            <p>{whencast.description}</p>

                        </div>
                    );
                })}
            </div>        
        );
    }
};




export default Whencast;
    