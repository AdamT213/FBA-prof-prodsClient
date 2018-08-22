import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Distributor from './Presentational/Distributor';
import AddDistributor from '../Forms/AddDistributor'
import { FindDistributors } from '../Actions/DistributorActions'
import { ShowDistributor } from './ShowDistributor'; 
import { SetCurrentDistributor } from '../Actions/DistributorActions'

//Main homepage for application, showing a list of existing distributors and a link to add a new distributor

class DistributorsList extends Component { 

  componentDidMount() { 
    //initial get request for list of distributors
    this.props.FindDistributors()
  } 

  handleClick = event => { 
    event.preventDefault();
    let distributor = {};
    distributor.id= event.target.id;
    this.props.SetCurrentDistributor(distributor);   
  }

  render() {

    const distributors = this.props.distributors.map((distributor, index) => {
      return <div><Distributor name={distributor.name} key={index} /> <button id={distributor.id} onClick={this.handleClick}>See Info For This Distributor</button><br /><br /></div>
    });

    return (
        <div className= "App"> 
        <Router> 
        <div>
        <ul>
          <li><Link to={'/distributors/new'}>
              Add a New Distributor
            </Link></li>
          </ul>
          <div>
            <h2>Here are all of your Current Distributors</h2>
          </div>
          <ul>
            {distributors}
           </ul>
          <Switch>
            <Route path={`/distributors/new`} component={AddDistributor} />
          </Switch> 
          </div>
          </Router>
        </div>
    )
  }
};

function mapStateToProps(state){ 
  return {distributors: state.DistributorsReducer.distributors}
} 

export default connect(mapStateToProps, {FindDistributors, SetCurrentDistributor})(DistributorsList);
