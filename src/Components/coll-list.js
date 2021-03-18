import Axios from 'axios';
import React, { Component } from 'react';
import { Link ,Redirect} from 'react-router-dom';
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
    Axios.get("http://localhost:4000/")
        .then(res=>{
            this.setState({
                colleges:res.data
            })
            this.filter(this.state.colleges)
        })
    
}


filter(data){
    var j =  data.map((college)=>{
        console.log(this.props.match.params.state)
        if (college.state == this.props.match.params.state){
            console.log(college.state)
            return(
                <div>
                    {college.name} - {college.students}
                    <Link to={'/college/'+college.name}>View More</Link>
                </div>
            )
        }
    })
    return j
}
render() {
    var j = this.filter(this.state.colleges)
        return (
            <div>
                <Nav />

                {j}
            </div>

        );
    }
}