import React,{useEffect} from 'react';

import kishore from '../img/kishore.jpg'

function footer() {
    return (
        <div>
            <footer id="footer">
                <div className="container-fluid">
                  <div className="row mt-2" >
                      <div className="col-6 col-sm-4 align-self-center">
                          <ul className="list-unstyled text-center">
                              <li><a href="/">Home</a></li>
                              <li><a href="/">Dashboard</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
                      
                        <div className="col-6 col-sm-4 d-flex align-items-center">


                                <img style={{height:"20vh",display:"block",margin:"auto"}}  src={kishore} />
                        </div>
                            
                            <div id="face" className="text-center col-12 col-sm-4 d-flex align-items-center justify-content-center">
                                <a href="https://www.facebook.com/QkResTechnologies/"><i className="fa fa-facebook fa-lg mr-3"> </i></a>
                                <a href="https://www.linkedin.com/in/qkres-technologies-and-research-a25a571b1/?originalSubdomain=in"><i className="fa fa-linkedin fa-lg mr-3"> </i></a>
                                <a href="mailto:contact@qkres.com"><i className="fa fa-envelope fa-lg"> </i></a>
                            </div>
                        
                            
                        
                            
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default footer;