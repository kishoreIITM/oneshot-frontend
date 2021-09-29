import React, { Component } from 'react';

import axios from 'axios';
import Nav from './nav';
import stud from '../img/student.png';
import Zoom from 'react-reveal/Zoom';
import { WhisperSpinner } from "react-spinners-kit";
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: ''
    };

  }

  componentDidMount() {
    this.getCollegeData();
  }

  getCollegeData() {
    axios.get('https://college-oneshot.herokuapp.com/student/' + this.props.match.params.collegeId + "/" + this.props.match.params.id)
      .then(response => {
        console.log(response)
        this.setState({
          student: response.data.students
        });
      });
      console.log(this.state)

  };

  render() {
    console.log(this.state)
    if (this.state.student=='') {
      return (<div className="loader">
        <div>
          <WhisperSpinner
            size={70}
            color="#006B38FF"
          />
          <br />
          <h2 style={{ color: "white", textAlign: "center" }}>Just a moment, the data is getting loaded</h2>
        </div>
      </div>)
    }
    if (this.state.student==null){
      return(
      <div style={{color:"white",marginTop:"10rem",textAlign:"center",minHeight:"60vh"}} className="container">
          <h2>Sorry! No students found with that data</h2>
      </div>)
    }

    var skills = ""

    this.state.student.skills.slice(0, 5).map((skill) => {

      skills = skills + skill + ",  "
    })
    skills = skills.slice(0, skills.length - 3)
    return (

      <div className="stud-details container">
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Student details</h2>
          <Zoom>

            <div className="row">
              <div className="col-sm-7">
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Name: </strong>{this.state.student.name}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>ID:</strong> {this.state.student.id}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Batch:</strong> {this.state.student.batch}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>College: </strong>{this.state.student.college}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Skills: </strong>{skills}</h4>
              </div>
              <div className="col-sm-5 d-flex justify-content-center align-items-center">
                <img style={{ maxHeight: "7rem" }} src={stud}></img>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}