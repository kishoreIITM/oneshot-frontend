import React,{useEffect} from 'react';

import kishore from '../img/kishore.jpg'

function footer() {
    return (
        <div>
            <footer id="footer">
                <div className="container-fluid">
                  <div className="row">
                      <div className="col-5 col-sm-4 mt-2 align-self-center">
                          <ul className="list-unstyled ml-2 text-center">
                              <li><a href="/">Home</a></li>
                              <li><a href="/">Dashboard</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
                      
                        <div className="col-11 col-sm-8 align-self-center">
                            <img style={{height:"10rem",display:"block",margin:"auto",paddingTop:"1rem"}}  src={kishore} />
                            <div className="text-center">
                                fkjghls;gh
                                <a href="https://www.facebook.com/QkResTechnologies/"><i className="fa fa-facebook fa-lg mr-3"> </i></a>
                                <a href="https://www.linkedin.com/in/qkres-technologies-and-research-a25a571b1/?originalSubdomain=in"><i className="fa fa-linkedin fa-lg mr-3"> </i></a>
                                <a href="mailto:contact@qkres.com"><i className="fa fa-envelope fa-lg"> </i></a>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default footer;