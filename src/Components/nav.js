import React,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class navbar extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render(){
    return (
        <div class="main">
             <Navbar light expand="md" className="fixed-top">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/"><h2 className="nav-head">Qkres</h2></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                            <NavItem>
                                <a className="nav-link" href='/'> Home</a>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/country'>Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='#'> Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='#'> Contact Me</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        </div>
    )
    }
}
