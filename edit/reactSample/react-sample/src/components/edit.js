import React, { Component } from 'react';
import { Form, Text, Textarea } from 'react-form';
import {
    Link
  } from 'react-router-dom'
  

  class Edit extends Component {
    constructor(props) {
        super(props);
            this.state = {
                whencast: {
                    name: "",
                    description: "",
                    img: "",
                    events: []
                },
                update: {
                    name: "",
                    description: ""
                }
            };
      }
      render() {
          return(
            <div className="edit-container">
                <div className="back-link">
                    <Link to='/'>Back To My Whencasts</Link>
                </div>
                <div className="edit-img">
                    <img src={this.state.whencast.img} alt={this.state.whencast.name}/>
                </div>
                    <div className="form">
                        <Form
                            onSubmit={(values) => {
                            console.log('Success!', values)
                            let url = `https://api.whenhub.com/api/schedules/${this.props.match.params.id}`
                            this.updateWhencast(url, values);
                            }}
                            validate={values => {
                                const { name, description } = values
                                return {
                                name: !name ? 'A name is required' : undefined,
                                description: !description ? 'A description is required' : undefined,
                                }
                            }}
                            postSubmit={(values) => {
                                
                            }}
                        >
                            {({submitForm}) => {
                                return (
                                    <form onSubmit={submitForm}>
                                        <label>Name: </label>
                                    <Text placeholder={this.state.whencast.name} field='name' />
                                    <label>Description: </label>

                                    <Textarea placeholder={this.state.whencast.description} field='description' />
                                    <button type='submit'>Submit</button>
                                    </form>
                                )
                            }}
                        </Form>
                    </div>
                    <div className="events">
                        <h3>{this.state.whencast.name}'s Events</h3>
                            {this.state.whencast.events.map(function(event){
                                return (
                                    <div key={event.id}className="card">
                                            {event.media.length > 0 ? (
                                                <img src={event.media[0].url} alt={event.media.name}/>
                                            ) : (
                                                <img src="https://cdn.whenhub.com/img/logo/logo-square.png" alt="placeholder"/>
                                            )}
                                         <div className="container">
                                            <h4>{event.name}</h4>
                                            <div className="description"><p>{event.description.replace(/(<([^>]+)>)/ig,"")}</p></div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
            </div>
      
          )
      }

      updateWhencast(url, values){
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.accesstoken
            },
            body: JSON.stringify(
                {
                    name: values.name,
                    description: values.description
                }
            )
            })
            .then((res) => res.json()).then((data) => {
                console.log(data)
            });

      }

      fetchWhencast(url){
        fetch(url, {
            method: 'GET',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': window.accesstoken
            }
            })
            .then((res) => res.json()).then((data) => {
                console.log(data)
                if (data.media.length > 0) {
                    this.setState({
                        whencast: {
                            name: this.state.whencast.name.concat(data.name), 
                            description: this.state.whencast.description.concat(data.description),
                            img: this.state.whencast.img.concat(data.media[0].url),
                            events: this.state.whencast.events.concat(data.events)
                        }
                    })
                }else{
                    this.setState({
                        whencast: {
                            name: this.state.whencast.name.concat(data.name), 
                            description: this.state.whencast.description.concat(data.description),
                            img: this.state.whencast.img.concat("https://cdn.whenhub.com/img/logo/logo-square.png"),
                            events: this.state.whencast.events.concat(data.events)
                        }
                    })
                }
                console.log(this.state.whencast)
            })
    }
  
      componentDidMount() {
        const Id = this.props.match.params.id
        let url = `https://api.whenhub.com/api/schedules/${Id}?filter[include]=media&filter[include][events]=media`
        this.fetchWhencast(url)
      }
  
  
  
  
    }
  
  
  


  export default Edit; 