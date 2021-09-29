import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import college from './Components/college';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import student from './Components/student';
import state from './Components/state';
import colllist from './Components/coll-list';
import collcourse from './Components/coll-course';
import studentlist from './Components/stud-list.js';
import Nav from './Components/nav';
import Footer from './Components/footer';
import 'font-awesome/css/font-awesome.min.css';
import search from './Components/search';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
                <Route exact path= "/" component={state} />
                <Route path = "/college/:id" component={college} />
                <Route path="/course/:course" component={collcourse} />
                <Route path="/student/:collegeId/:id" component={student} />
                <Route path="/studlist/:id" component={studentlist} />
                <Route path="/state/:state" component={colllist} />
                <Route path="/search" component={search} />
          </Switch>
          <Footer></Footer>
      </div>
    </Router>
    );
  }
}

export default App;
