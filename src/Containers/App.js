import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import NewMeasurePage from '../Containers/NewMeasurePage.js';
import MeasureDetailsPage from '../Containers/MeasureDetailsPage.js';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }

  render() {
   const history = createBrowserHistory();

    return (
        <Router history={history}>
           <div className="App">
              <Route component={NewMeasurePage} exact path ="/" />
              <Route component={MeasureDetailsPage} exact path ="/measureDetails" />
              {/* <Route component={RefineDataset} exact path='/refineDataSet' /> */}
           </div>
        </Router>
    );
 }
}

export default App;
