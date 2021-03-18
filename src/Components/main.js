import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
             value: '',
             colleges :[]
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        Axios.get("http://localhost:4000/")
        .then(res=>{
            this.setState({
                colleges:res.data
            })
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        //axios.post("http://localhost:4000/college")
    }

    render() {
        let details = this.state.colleges.map((college)=>{
            return(
                <div>
                    <p>{college.name}</p>
                </div>
            )
        })
        return (
            <div>
                <div>

                </div>
                {details}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <Link to={"/college/" + this.state.value} ><input type="submit" value="Submit" /></Link>
                </form>
            </div>

        );
    }
}