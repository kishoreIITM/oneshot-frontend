import React, {Component} from 'react';
//import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Nav from './nav';
import landimg from '../img/bg.jpg';
import Zoom from 'react-reveal/Zoom'

export default class land extends Component {
    constructor(props) {
      super(props);
      this.state = {

    };

    }

  
    render() {

        return(
        
        <div className="land">
            <div className="row">
                <Zoom>
                <div className="col-md-6 land-left">
                    <img src={landimg} className="img" >

                    </img>
                </div>
                </Zoom>
            <div className="col-md-6 land-right ">
                <div>
                <h1 className="lnd-txt">An Investment in Knowledge pays the best interest</h1>
                <br/>
                <div style={{textAlign:"center",fontSize:"2vh",color:"white",opacity:"0.5"}}>
                    Scroll down to view the statistics on collegs of India
                    <br/>
                    <i style={{color:"rgb(141, 165, 189)",fontSize:"3vh"}} class="fa fa-angle-double-down"></i></div>
                </div>
                
            </div>
            </div>
            
        </div>
          )
    }
  }