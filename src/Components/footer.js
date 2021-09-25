import React,{useEffect} from 'react';

import kishore from '../img/kishore.jpg'

function footer() {
    return (
        <div>
            <footer id="footer">
                <div class="container-fluid">
                  <div class="row">
                      <div class="col-5 col-sm-4 mt-2 align-self-center">
                          <ul class="list-unstyled ml-2 text-center">
                              <li><a href="#">Home</a></li>
                              <li><a href="https://www.qkres.com/about-us">Dashboard</a></li>
                              <li><a href="https://www.qkres.com/contact-us">Contact</a></li>
                          </ul>
                      </div>
                      
                        <div class="col-11 col-sm-8 align-self-center">
                            <img style={{height:"10rem",display:"block",margin:"auto",paddingTop:"1rem"}}  src={kishore} />
                            <div class="text-center">
                                fkjghls;gh
                                <a href="https://www.facebook.com/QkResTechnologies/"><i class="fa fa-facebook fa-lg mr-3"> </i></a>
                                <a href="https://www.linkedin.com/in/qkres-technologies-and-research-a25a571b1/?originalSubdomain=in"><i class="fa fa-linkedin fa-lg mr-3"> </i></a>
                                <a href="mailto:contact@qkres.com"><i class="fa fa-envelope fa-lg"> </i></a>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default footer;