import React, { Component } from 'react';
import './App.css'; 
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
        <DistributorsList/> 
      </div>
    );
  }
}

export default App;
