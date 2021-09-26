import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import main from './Components/main';
import college from './Components/college';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import student from './Components/student';
import country from './Components/country';
import state from './Components/state';
import colllist from './Components/coll-list';
import Nav from './Components/nav';
import Footer from './Components/footer';
import 'font-awesome/css/font-awesome.min.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
                <Route exact path= "/" component={state} />
                <Route path = "/college/:id" component={college} />
                <Route path="/student/:id" component={student} />

                <Route path="/state/:state" component={colllist} />
          </Switch>
          <Footer></Footer>
      </div>
    </Router>
    );
  }
}

export default App;
