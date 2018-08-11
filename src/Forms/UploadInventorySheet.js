import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { UploadFile } from '../Actions/DistributorActions'; 
import { Distributor } from '../Components/Presentational/Distributor'


export class UploadInventory extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      uploadStatus: false,
    }
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload = event => { 
    debugger;
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    this.props.UploadFile(data);   
    this.setState({
      uploadStatus: true,
    });
  }

  render() { 

    return(
      <div className="container">
        <form onSubmit={this.handleUpload}>
          <div className="form-group">
            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>
          <button className="btn btn-success" type>Upload</button>
        </form>
      </div>
    )
    }
  }
export default connect(null, { UploadFile })(UploadInventory);