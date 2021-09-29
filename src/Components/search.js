import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collid1: '',
            studid: "",
            collegeid: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChangestud = this.handleChangestud.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitstud = this.handleSubmitstud.bind(this);
    }
    componentDidMount() {

    }


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
        window.location.href = "/college/ " + this.state.collegeid
    }
    handleSubmitstud(event) {
        event.preventDefault();
        
        window.location.href = "/student/ " + this.state.collid1 + "/" + this.state.studid
    }

    render() {

        return (
            <div id="search-bg" className="container-fluid">

                <div className="container search">
                    <div className="row">
                        <Fade left>

                            <div className="col-md-6">
                                <h2 > Search College</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>College ID</label>
                                        <input type="text" value={this.state.collegeid} onChange={this.handleChange} className="form-control" placeholder="College ID" />
                                        <small id="emailHelp" className="form-text text-muted">You need to enter college ID not college name.</small>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-md-6">
                                <h2 > Search Student</h2>
                                <form onSubmit={this.handleSubmitstud}>
                                    <div className="form-group">
                                        <label>College ID</label>
                                        <input type="text" value={this.state.collid1} onChange={this.handleChange1} className="form-control" placeholder="College ID" />
                                        <small id="emailHelp" className="form-text text-muted">You need to enter college ID not college name.</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Student ID</label>
                                        <input type="text" value={this.state.studid} onChange={this.handleChangestud} className="form-control" placeholder="Student ID" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </Fade>
                    </div>



                </div>

            </div>
        )
    }
}