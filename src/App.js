import React, { Component } from 'react';
import './App.css'; 
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import DistributorsList from './Components/DistributorsList'

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Your FBA Helper!</h1> 
        </header> 
        <Router history= {history}>
          <div>
            <Route exact path='/' component={DistributorsList}/>
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
