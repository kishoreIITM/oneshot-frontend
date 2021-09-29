import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Fade from 'react-reveal/Fade';
import { WhisperSpinner } from "react-spinners-kit";
export default class studentlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            students: [],
            college: {}
        };
        this.filter = this.filter.bind(this);
    }
    componentDidMount() {
        Axios.get('https://college-oneshot.herokuapp.com/college/' + this.props.match.params.id)
            .then(response => {
                console.log(response)
                this.setState({
                    students: response.data.students,
                    college: response.data.college,
                    id: response.data.college.id
                });

            });
    }


    filter(data) {
        console.log(data)

        var j = data.map((student) => {
            var skills = ""

            student.skills.slice(0, 5).map((skill) => {

                skills = skills + skill + ",  "
            })
            skills = skills.slice(0, skills.length - 3)
            return (
                <Fade up>
                    <div className="row list-items" style={{ backgroundColor: "rgba(38, 44, 77, 0.473)" }}>
                        <div className="col-3">
                            {student.name}
                        </div>
                        <div className="col-2">
                            {student.batch ? student.batch : " - "}
                        </div>
                        <div className="col-2">
                            {student.id ? student.id : " - "}
                        </div>

                        <div className="col-5">
                            {skills}

                        </div>
                    </div>
                </Fade>
            )
        })
        return j
    }
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
        var j = this.filter(this.state.students)
        return (
            <div className="container coll-list">
                <h1 style={{ marginBottom: "3rem", textAlign: "center" }}>List of students in {this.state.college.name}</h1>
                <div className="row list-heading" style={{ backgroundColor: "rgba(36, 2, 44, 0.253)", border: "0px solid rgb(55, 80, 112)" }}>
                    <div className="col-3">
                        NAME
                    </div>
                    <div className="col-2">
                        BATCH
                    </div>
                    <div className="col-2">
                        ID
                    </div>
                    <div className="col-5">
                        SKILLS
                    </div>

                </div>
                <Nav />

                {j}
            </div>

        );
    }
}