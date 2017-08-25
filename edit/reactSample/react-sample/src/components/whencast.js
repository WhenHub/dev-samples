import React, { Component } from 'react';


class Whencast extends Component {
    render() {
        let data = this.props.data;
        return(

            <div>
                {data.whencastName}
            </div>
        );
    }
};




export default Whencast;
    