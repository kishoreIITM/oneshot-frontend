import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link } from 'react-router-dom';
import Nav from './nav';

export default class college extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      college: {
              },
      students:[],
      simcollege:[]
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCollegeData();
  }
  componentDidUpdate(){
    if (this.state.id != this.props.match.params.id){
      this.getCollegeData();
    }
  }


  
  getCollegeData() {
    axios.get('https://college-oneshot.herokuapp.com/college/'+this.props.match.params.id)
    .then(response => {
      this.setState({
      id: response.data.college.id,
      college: response.data.college,
      students:response.data.students,
      simcollege:response.data.simcollege
    });
    });
  };


  render() {
    if(this.state.id != this.props.match.params.id)
    {
      return(<div className='container'>
          Details Loading
      </div>)
    }
    var students = this.state.students.map((student)=>{
      return(<div key={student.id}>
        <p>{student.name}</p>
        <p>{student.id}</p>
        <Link to={"/student/"+student.id}>View More</Link>
      </div>
      )
    })

    var simcollege = this.state.simcollege.map((college)=>{
      return(
        <div>
          <p>{college.name}.....<Link to={"/college/"+college.id}>Know more</Link></p>
        </div>
      )
    })
    return (<div className="container">
      <div className="row">
      <div className="col-md-6">
          <div>
              <h4 key={this.state.college.id}>Name: {this.state.college.name}</h4>
              <h4>ID: {this.state.college.id}</h4>
              <h4>Year Founded: {this.state.college.founded}</h4>
              <h4>City: {this.state.college.city}</h4>
              <h4>State: {this.state.college.state}</h4>
              <h4>Country: {this.state.college.county}</h4>
              <h4>No.Of Students: {this.state.college.students}</h4>
            </div>
          <h1>
            Students studying there
          </h1>
          {students} 
        </div>
        <div className="col-md-6">
        <h1>Similar College</h1>
          {simcollege}
        </div>
      </div>
        
    </div>)
  }

}
