import React, {Component} from 'react';
//import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Nav from './nav';

export default class home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          student:{}
    };

    }
  //function which is called the first time the component loads
  componentDidMount() {
    this.getCollegeData();
  }

  //Function to get the Customer Data from json
  getCollegeData() {
    axios.get('https://college-oneshot.herokuapp.com/student/'+this.props.match.params.id)
    .then(response => {
        console.log(response)
      this.setState({
      student:response.data.students});
    });
    
  };
  
    render() {
        if(!this.state.student.id){
            <Nav />
            return(<div>
              <Nav />
                Details Loading
            </div>)
        }
        return(
        
        <div>
            <p>{this.state.student.name}</p>
            <p>{this.state.student.id}</p>
          </div>
          )
    }
  }