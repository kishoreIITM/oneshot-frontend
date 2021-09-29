import Axios from 'axios';
import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import colors from '../colors';
import { WhisperSpinner } from "react-spinners-kit";
import Fade from 'react-reveal/Fade';

import landing from '../img/bg.jpg';
import Zoom from 'react-reveal/Zoom';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            colleges: [],
            loading: true,
            imgloading: true
        };


        this.filter = this.filterstate.bind(this);
        this.filter = this.filtercourse.bind(this);
        this.imgonload = this.imgonload.bind(this);
    }

    imgonload() {
        setTimeout(() => {
            if (this.state.imgloading == true) {
                console.log("loaded")
                this.setState({
                    imgloading: false
                })
                console.log(this.state)
            }
        }, 500)


    }

    componentDidMount() {

        Axios.get("https://college-oneshot.herokuapp.com/")
            .then(res => {
                this.setState({
                    colleges: res.data,
                    loading: false
                })
            })

    }



    filterstate(data) {
        var ans = {}
        var j = data.map((college) => {
            if (college.state) {
                if (college.state in ans) {
                    ans[college.state] = 1 + ans[college.state]
                }
                else {
                    ans[college.state] = 1
                }
            }

        })
        var answer = []
        answer[0] = Object.keys(ans);
        answer[1] = Object.values(ans);
        return answer
    }


    filtercourse(data) {
        var ans = {}
        var j = data.map((college) => {
            if (college.courses && college.courses != []) {
                var k = college.courses.map((course) => {
                    if (course in ans) {
                        ans[course] = 1 + ans[course]
                    }
                    else {
                        ans[course] = 1
                    }
                })

            }
        })

        var answer = []
        answer[0] = Object.keys(ans);
        answer[1] = Object.values(ans);
        return answer
    }

    render() {
        var statedatas = this.filterstate(this.state.colleges);
        var coursedatas = this.filtercourse(this.state.colleges);
        const statedata = {
            labels: statedatas[0],
            datasets: [{
                data: statedatas[1],
                backgroundColor: colors[0],

            }],
            hoverOffset: 4
        };
        const coursedata = {
            labels: coursedatas[0],
            datasets: [{
                data: coursedatas[1],
                backgroundColor: colors[1],

            }],
            hoverOffset: 4
        };

        if (true) {
            return (
                <div>
                    <div className="loader" style={(this.state.imgloading || this.state.loading) ? {} : { display: "none" }}>
                        <div>
                            <WhisperSpinner
                                size={70}
                                color="#006B38FF"
                            />
                            <br />
                            <h2 style={{ color: "white", textAlign: "center" }}>Just a moment, the data is getting loaded</h2>

                        </div>

                    </div>



                    <div className="container-fluid" style={(!this.state.imgloading && !this.state.loading) ? {} : { display: "none" }}>
                        <div className="land">
                            <div className="row">

                                <div className="col-md-6 land-left">
                                    <Zoom >
                                        <img src={landing} onLoad={this.imgonload()} className="img" ></img>
                                    </Zoom>
                                </div>


                                <div className="col-md-6 land-right ">
                                    <div>
                                        <h1 className="lnd-txt">An Investment in Knowledge pays the best interest</h1>
                                        <br />
                                        <div style={{ textAlign: "center", fontSize: "2vh", color: "white", opacity: "0.5" }}>
                                            Scroll down to view the statistics on collegs of India
                                            <br />
                                            <i style={{ color: "rgb(141, 165, 189)", fontSize: "3vh" }} class="fa fa-angle-double-down"></i></div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div id="dashboard container" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                            <Fade down>
                                <div style={{ textAlign: "center", color: "rgb(141, 165, 189)" }}>
                                    <h1> Stats on colleges of India</h1>
                                    Please click on the respective block of pie chart to drill down for more details
                                </div>
                            </Fade>

                            <div className="row" style={{ marginTop: "2rem" }}>

                                <Fade up>
                                    <div className="do col-md-6 m-auto">
                                        <Doughnut options={{
                                            maintainAspectRatio: false,
                                            responsive: true,
                                            onClick: function (event, item) {
                                                if (item[0] != undefined) {
                                                    window.location.href = "/state/" + statedatas[0][item[0]._index]
                                                }
                                            },
                                            animation: {
                                                animateRotate: true,
                                                animateScale: true,
                                                tension: {
                                                    duration: 1000
                                                }
                                            },
                                            title: {
                                                display: true,
                                                text: 'State vise comparison',
                                                position: 'bottom',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                            }
                                        }} data={statedata} />
                                    </div>
                                </Fade>

                                <Fade up>
                                    <div className="do col-md-6 m-auto">
                                        <Doughnut options={{
                                            maintainAspectRatio: false,
                                            responsive: true,
                                            onClick: function (event, item) {
                                                if (item[0] != undefined) {
                                                    window.location.href = "/course/" + coursedatas[0][item[0]._index]
                                                }
                                            },
                                            animation: {
                                                animateRotate: true,
                                                animateScale: true,
                                                tension: {
                                                    duration: 1000
                                                }
                                            },
                                            title: {
                                                display: true,
                                                text: 'Course vise comparison',
                                                position: 'bottom',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                            }
                                        }} data={coursedata} />
                                    </div>
                                </Fade>
                            </div>
                        </div>

                        <h4 style={{ marginBottom: "2rem", color: "rgb(141, 165, 189)", fontSize: "1.5rem", textAlign: "center", }}> Total colleges in India : {statedatas[0].length} </h4>

                    </div>

                </div>

            )
        }

    }
}