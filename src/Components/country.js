import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import {Doughnut} from 'react-chartjs-2';



export default class country extends Component {
    constructor(props) {
        super(props);
        this.state = {
             value: '',
             colleges :[]
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

handleChange(event) {
    this.setState({ value: event.target.value });
}

handleSubmit(event) {
    event.preventDefault();
    //axios.post("http://localhost:4000/college")
    window.location.href="/college/" + this.state.value
}

filter(data){
    var ans={}
    var j =  data.map((college)=>{
        if(college.country){
            if(college.country in ans){
                ans[college.country] = 1+ ans[college.country]
            }
            else{
                ans[college.country] = 1
            }
        }
    })
    var answer = []
    answer[0]= Object.keys(ans);
    answer[1] = Object.values(ans);
    return answer
}

render() {
    var datas = this.filter(this.state.colleges)
    const data = {
        labels: datas[0],
        datasets: [{
          data: datas[1],
          backgroundColor: [
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }],
        hoverOffset: 4
      };


    let details = this.state.colleges.map((college)=>{
        return(
                <div>
                    <p>{"hi "+college.name}</p>
                </div>
            )
        })
    
        return (
            
            <div className="container">
                <div className="row">
                    <div className="do col-10 m-auto">
                    <Doughnut  options={{
                        maintainAspectRatio:false,
                        responsive:true,
                    onClick :function(event,item){
                        window.location.href="/country/"+datas[0][item[0]._index]
                    },
                    animation:{
                        animateRotate:true,
                        animateScale:false,
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
                        display:false,
                        
                    }
                }} data={data}/>

                    </div>

                </div>
                
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