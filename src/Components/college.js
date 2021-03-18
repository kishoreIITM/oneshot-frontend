import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Nav from './nav';

export default class college extends Component {

  constructor(props) {
    super(props)
    this.state = {
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

  //Function to get the Customer Data from json
  getCollegeData() {
    axios.get('http://localhost:4000/college/'+this.props.match.params.id)
    .then(response => {
      console.log(response.data.simcollege)
      this.setState({college: response.data.college,
      students:response.data.students,
      simcollege:response.data.simcollege
    });
    });
    
  };
componentDidUpdate(){
  axios.get('http://localhost:4000/college/'+this.props.match.params.id)
    .then(response => {
      console.log(response.data.simcollege)
      this.setState({college: response.data.college,
      students:response.data.students,
      simcollege:response.data.simcollege
    });
    });
    
}

  render() {
    console.log("render")
    if(!this.state.college.id)
    {
      return(<div>
        <Nav/>
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
    console.log(students)
    var simcollege = this.state.simcollege.map((college)=>{
      return(
        <div>
          <p>{college.name}.....<Link to={"/college/"+college.name}>Know more</Link></p>
        </div>
      )
    })
    return (<div className="addmargin">
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
        <h1>Similar College</h1>
        {simcollege}
      </div>
    </div>)
  }

}
