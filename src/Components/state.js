import Axios from 'axios';
import React, { Component } from 'react';
import 'chart.js';
import {Doughnut} from 'react-chartjs-2';

export default class home extends Component {
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
    Axios.get("https://college-oneshot.herokuapp.com/")
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
}

filter(data){
    var ans={}
    var j =  data.map((college)=>{
        if (college.country == this.props.match.params.country){
            if(college.state){
                if(college.state in ans){
                    ans[college.state] = 1+ ans[college.state]
                }
                else{
                    ans[college.state] = 1
                }
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
          ],
          hoverOffset: 4
        }]
      };
        return (
            <div>
                <Doughnut options={{
                    onClick :function(event,item){
                        //console.log(item[0]._index)
                        window.location.href="/state/"+datas[0][item[0]._index]
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
                }}
                data={data}/>
                India : {Object.keys(this.filter(this.state.colleges)).length}
            </div>

        );
    }
}