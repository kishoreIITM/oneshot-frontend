import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { WhisperSpinner } from "react-spinners-kit";
export default class college extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      college: {
      },
      students: [],
      simcollege: []
    }
  }

  componentDidMount() {
    this.getCollegeData();
  }
  componentDidUpdate() {
    if (this.state.id != this.props.match.params.id) {
      this.getCollegeData();
    }
  }



  getCollegeData() {
    axios.get('https://college-oneshot.herokuapp.com/college/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data.college.id,
          college: response.data.college,
          students: response.data.students,
          simcollege: response.data.simcollege
        });
      });
    console.log(this.state)
  };


  render() {
    if (this.state.id != this.props.match.params.id) {
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

    var students = this.state.students.slice(0, 5).map((student) => {

      return (
        <div className="row col-stud-list">
          <div className="col-4">
            {student.name}
          </div>
          <div className="col-3">
            {student.id}
          </div>
          <div className="col-5">
            <Link to={"/student/" + this.state.college.id + "/" + student.id}>Click Here</Link>
          </div>
        </div>
      )
    })

    var simcollege = this.state.simcollege.slice(0, 6).map((college) => {
      if (college.id == this.props.match.params.id) {
        return
      }
      return (
        <Fade up>
          <div className="row list-items sim-coll-list">
            <div className="col-3">
              {college.name}
            </div>
            <div className="col-2">
              {college.city ? college.city : " - "}
            </div>
            <div className="col-2">
              {college.state ? college.state : " - "}
            </div>
            <div className="col-2">
              {college.founded ? college.founded : " - "}
            </div>
            <div className="col-3">
              <Link to={'/college/' + college.id}>Click here</Link>
            </div>
          </div>
        </Fade>
      )
    })

    var courses = ""

    this.state.college.courses.map((course) => {

      courses = courses + course + ",  "
    })
    courses = courses.slice(0, courses.length - 3)

    return (
      <div className="container-fluid college" style={{ marginTop: "7rem" }}>
        <div className="container">
          <h1 style={{ textAlign: "center", color: "rgb(141, 165, 189)", marginBottom: "2rem" }}>Details on {this.state.college.name}</h1>


          <div className="row">
            <Fade left>

              <div className="col-md-6">
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Name: </strong>{this.state.college.name}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>ID:</strong> {this.state.college.id}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Year Founded:</strong> {this.state.college.founded}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>City: </strong>{this.state.college.city}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>State: </strong>{this.state.college.state}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Country:</strong> India</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>No. Of Students:</strong> {this.state.college.students}</h4>
                <h4><strong style={{ color: "rgba(240, 248, 255, 0.808)" }}>Courses offered:</strong> {courses}</h4>
              </div>
            </Fade>
            <Fade right>
              <div className=" col-md-6 d-flex justify-content-center">
                <div style={{ paddingTop: "1rem" }}>
                  <h2 style={{ textAlign: "center" }}>
                    Top scorers in this institute
                  </h2>
                  <div className="row col-stud">
                    <div className="col-4">
                      NAME
                    </div>
                    <div className="col-3">
                      ID
                    </div>
                    <div className="col-5">
                      KNOW MORE
                    </div>
                  </div>
                  {students}
                  <a style={{ textAlign: "center", display: "block", marginTop: "0.5rem" }} href={'/studlist/' + this.state.id}>  View all students</a>
                </div>


              </div>
            </Fade>
          </div>

          <h3 style={{ textAlign: "center", color: "rgb(141, 165, 189)", marginTop: "2rem", marginBottom: "2rem" }}>Similar Colleges</h3>
          <div className="row list-heading sim-coll-list">
            <div className="col-3">
              NAME
            </div>
            <div className="col-2">
              CITY
            </div>
            <div className="col-2">
              STATE
            </div>
            <div className="col-2">
              FOUNDED
            </div>
            <div className="col-3">
              KNOW MORE
            </div>
          </div>
          {simcollege}

        </div>

      </div>

    )
  }

}
