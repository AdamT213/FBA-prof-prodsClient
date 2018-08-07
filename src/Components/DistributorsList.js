import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Distributor from './Presentational/Distributor';
import AddDistributor from '../Forms/AddDistributor'

//Main homepage for application, showing a list of existing distributors and a link to add a new distributor

class DistributorsList extends Component {

  render() {

    const distributors = this.props.distributors.map((distributor, index) => {
      return <Distributor name={distributor.name} key={index} />
    });

    return (
        <div className= "App"> 
        <Router> 
        <div>
        <ul>
          <li><Link to={`${this.props.match.url}/new`}>
              Add a New Distributor
            </Link></li>
          </ul>
          <div>
            <h3>Here are all of your Current Distributors</h3>
          </div>
          <ul>
            {distributors}
           </ul>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={AddDistributor} />
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

export default connect(mapStateToProps)(DistributorsList);