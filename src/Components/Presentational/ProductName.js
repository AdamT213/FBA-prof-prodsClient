import React, { Component } from 'react';

export class ProductName extends Component {  
    
  render() { 
    
      return(  
        <div className= "Product"> 
          <h3>{this.props.Title}</h3><br /> 
        </div>
      ); 
    }
  }

export default ProductName;