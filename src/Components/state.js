import Axios from 'axios';
import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import colors from '../colors';
export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
             value: '',
             colleges :[]
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filter = this.filterstate.bind(this);
        this.filter = this.filtercourse.bind(this);
    }
componentDidMount(){
    Axios.get("https://college-oneshot.herokuapp.com/")
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
    window.location.href="/college/" + this.state.value
}

filterstate(data){
    var ans={}
    var j =  data.map((college)=>{
            if(college.state){
                if(college.state in ans){
                    ans[college.state] = 1+ ans[college.state]
                }
                else{
                    ans[college.state] = 1
                }
            }
        
    })
    var answer = []
    answer[0]= Object.keys(ans);
    answer[1] = Object.values(ans);
    return answer
}

filtercourse(data){
    var ans={}
    var j =  data.map((college)=>{
            if(college.courses && college.courses != []){
                var k =college.courses.map((course)=>{
                    if(course in ans){
                        ans[course] = 1+ ans[course]
                    }
                    else{
                        ans[course] = 1
                    }
                })
                
                }
    })

    var answer = []
    answer[0]= Object.keys(ans);
    answer[1] = Object.values(ans);
    return answer
}

render() {
    var statedatas = this.filterstate(this.state.colleges);
    var coursedatas = this.filtercourse(this.state.colleges);
    console.log(statedatas)
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
        return (

            <div className="container">
                <div className="row">
                    <div className="do col-md-6 m-auto">
                        <Doughnut  options={{
                                maintainAspectRatio:false,
                                responsive:true,
                                onClick :function(event,item){
                                    if (item[0] !=undefined){
                                        window.location.href="/state/"+statedatas[0][item[0]._index]
                                    }  
                            },
                            animation:{
                                animateRotate:true,
                                animateScale:true,
                                tension:{
                                    duration:1000
                                }
                            },
                            title:{
                                display:true,
                                text:'State vise comparison',
                                position:'bottom',
                                fontSize:20
                            },
                            legend:{
                                display:true,   
                            }
                            }} data={statedata}/>
                    </div>
                
                    <div className="do col-md-6 m-auto">
                    <Doughnut  options={{
                                maintainAspectRatio:false,
                                responsive:true,
                                onClick :function(event,item){
                                    if (item[0] !=undefined){
                                        window.location.href="/course/"+coursedatas[0][item[0]._index]
                                    }  
                            },
                            animation:{
                                animateRotate:true,
                                animateScale:true,
                                tension:{
                                    duration:1000
                                }
                            },
                            title:{
                                display:true,
                                text:'State vise comparison',
                                position:'bottom',
                                fontSize:20
                            },
                            legend:{
                                display:true,   
                            }
                            }} data={coursedata}/>
                    </div>       
                </div>

                <h4 style={{color: "GrayText",fontSize:"1.5rem",textAlign:"center",margin:"auto"}}> Total colleges in India : {statedatas[0].length} </h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}