import React, { Component } from 'react';
import { connect } from 'react-redux';
import  UploadInventory  from '../Forms/UploadInventorySheet';
import { Distributor } from '../Presentational/Distributor'; 
import { history } from '../App'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"; 

export class ShowDistributor extends Component { 
     
  render() { 

      return ( 
        <div> 
          <div className= "container">
          <Router history= {history}> 
        <div>
          <Link to={`${this.props.match.url}/inventory/new`}>
              Upload A New Inventory Sheet for This Distributor
          </Link><br />
          <div>
          <Switch>
            <Route path={`${this.props.match.url}/inventory/new`} 
            component={UploadInventory} /> 
          </Switch> 
          </div> 
          </div>
         </Router> 
         </div>
        <Distributor name= {this.props.distributor.name} profProds= {this.props.distributor.ProfProds} 
         /> 
        </div> 
      ); 
    }
  }

function mapStateToProps(state){ 
  return {distributor: state.DistributorsReducer.distributor}
}

export default connect(mapStateToProps, null)(ShowDistributor);