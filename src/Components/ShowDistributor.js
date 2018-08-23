import React, { Component } from 'react';
import { connect } from 'react-redux';
import  UploadInventory  from '../Forms/UploadInventorySheet';
import  Distributor  from './Presentational/Distributor'; 
import { SetCurrentDistributor } from '../Actions/DistributorActions'
import { DeleteDistributor } from '../Actions/DistributorActions'
import { history } from '../App'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"; 

export class ShowDistributor extends Component { 

  componentDidMount() { 
    this.props.SetCurrentDistributor(this.props.distributor)
  } 

  handleClick = event => { 
    event.preventDefault();
    let distributor = {};
    distributor.id= event.target.id;
    this.props.DeleteDistributor(distributor);   
  }
     
  render() { 

      return ( 
        <div> 
          <div className= "container">
          <Router history= {history}> 
        <div>
          <Link to={`${this.props.match.url}/inventory/new`}>
              Upload A New Inventory Sheet for This Distributor
          </Link><br /> 
          <button id={this.props.distributor.id} onClick={this.handleClick}>Delete This Distributor</button>
          <div>
          <Switch>
            <Route exact path={`${this.props.match.url}/inventory/new`} 
            component={UploadInventory} /> 
          </Switch> 
          </div> 
          </div>
         </Router> 
         </div>
        <Distributor name= {this.props.distributor.name} products= {this.props.distributor.products} 
         /> 
        </div> 
      ); 
    }
  }

function mapStateToProps(state){ 
  return {distributor: state.DistributorsReducer.distributor}
}

export default connect(mapStateToProps, { SetCurrentDistributor, DeleteDistributor })(ShowDistributor);