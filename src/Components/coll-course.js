import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Fade from 'react-reveal/Fade';

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colleges: []
        };
        this.filter = this.filter.bind(this);
    }
    componentDidMount() {
        Axios.get("https://college-oneshot.herokuapp.com/")
            .then(res => {
                this.setState({
                    colleges: res.data
                })
                this.filter(this.state.colleges)
            })

    }


    filter(data) {
        console.log(data)
        var j = data.map((college) => {
            if (college.courses.includes(this.props.match.params.course)) {
                return (
                    <Fade up>
                        <div className="row list-items">
                            <div className="col-3">
                                {college.name}
                            </div>
                            <div className="col-2">
                                {college.city ? college.city : " - "}
                            </div>
                            <div className="col-2">
                                {college.students ? college.students : " - "}
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
            }
        })
        return j
    }
    render() {
        var j = this.filter(this.state.colleges)
        return (
            <div className="container coll-list">
                <h1 style={{ marginBottom: "3rem", textAlign: "center" }}>List of colleges offering {this.props.match.params.course}</h1>
                <div className="row list-heading">
                    <div className="col-3">
                        NAME
                    </div>
                    <div className="col-2">
                        CITY
                    </div>
                    <div className="col-2">
                        STUDENTS
                    </div>
                    <div className="col-2">
                        FOUNDED
                    </div>
                    <div className="col-3">
                        KNOW MORE
                    </div>
                </div>
                <Nav />

                {j}
            </div>

        );
    }
}