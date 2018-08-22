import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'; 
import {removeDistributor} from '../Actions/DistributorActions' 


class NavBar extends Component { 
  
  handleHomeNav = event => { 
    event.stopPropagation();
    this.props.removeDistributor(); 
  }

  render() {
    return (
      <div className="navbar">
        <NavLink className="link"
        onClick= {this.handleHomeNav}
        to="/"
        exact 
      >Home</NavLink> 
      </div>
    ); 
  }
};

export default connect(null, { removeDistributor })(NavBar);