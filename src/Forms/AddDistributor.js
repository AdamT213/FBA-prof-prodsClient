import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { CreateDistributor } from '../Actions/DistributorActions'; 
import { Distributor } from '../Components/Presentational/Distributor'


export class AddDistributor extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      name: '',
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = event => { 
    const distributor = Object.assign({}, this.state); 
    event.preventDefault();
    this.props.AddDistributor(distributor);   
    this.setState({
      name: '', 
    });
  }

  render() { 

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="col-md-4 control-label">Distributor's Name</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-4">
                        <button type="submit" className="btn btn-default">Add Distributor</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
      ); 
    }
  }
export default connect(null, { AddDistributor })(CreateDistributor);