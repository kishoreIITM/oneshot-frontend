import React, {Component} from 'react';
//import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Nav from './nav';
import stud from '../img/student.png';
import Zoom from 'react-reveal/Zoom';
import { WhisperSpinner } from "react-spinners-kit";
export default class home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          collid1:'',
          studid:"",
          collegeid:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChangestud = this.handleChangestud.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitstud = this.handleSubmitstud.bind(this);
    }
  //function which is called the first time the component loads
  componentDidMount() {

  }

  //Function to get the Customer Data from json

  handleChange(event) {
      console.log(event)
    this.setState({ collegeid: event.target.value });
}
handleChange1(event) {
    console.log(event)
  this.setState({ collid1: event.target.value });
}
handleChangestud(event) {
    console.log(event)
  this.setState({ studid: event.target.value });
}

handleSubmit(event) {
    event.preventDefault();
    //axios.post("http://localhost:4000/college")
    window.location.href = "/college/" + this.state.collegeid
}
handleSubmitstud(event) {
    event.preventDefault();
    //axios.post("http://localhost:4000/college")
    window.location.href = "/student/" + this.state.collid1+"/"+this.state.studid
}
  
    render() {
        
        return(
            <div id="search-bg" className="container-fluid">
            
            <div className="container search">
            <div className="row">
                <div className="col-md-6">
                    <h2 > Search College</h2>
                    <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label>College ID</label>
                                <input type="text" value={this.state.collegeid} onChange={this.handleChange} class="form-control"  placeholder="College ID" />
                                <small id="emailHelp" class="form-text text-muted">You need to enter college ID not college name.</small>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2 > Search Student</h2>
                    <form onSubmit={this.handleSubmitstud}>
                            <div class="form-group">
                                <label>College ID</label>
                                <input type="text" value={this.state.collid1} onChange={this.handleChange1} class="form-control"  placeholder="College ID" />
                                <small id="emailHelp" class="form-text text-muted">You need to enter college ID not college name.</small>
                            </div>
                            <div class="form-group">
                                <label>Student ID</label>
                                <input type="text" value={this.state.studid} onChange={this.handleChangestud} class="form-control"  placeholder="Student ID" />
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
            
            
            
        </div>
            
            </div>
          )
    }
  }