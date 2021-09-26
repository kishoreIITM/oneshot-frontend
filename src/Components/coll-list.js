import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
             colleges :[]
         };
        this.filter = this.filter.bind(this);
    }
componentDidMount(){
    Axios.get("https://college-oneshot.herokuapp.com/")
        .then(res=>{
            this.setState({
                colleges:res.data
            })
            this.filter(this.state.colleges)
        })
    
}


filter(data){
    var j =  data.map((college)=>{
        if (college.state == this.props.match.params.state){
            return(
                <div>
                    {college.name} - {college.students}
                    <Link to={'/college/'+college.id}>View More</Link>
                </div>
            )
        }
    })
    return j
}
render() {
    var j = this.filter(this.state.colleges)
        return (
            <div className="container">
                <Nav />

                {j}
            </div>

        );
    }
}