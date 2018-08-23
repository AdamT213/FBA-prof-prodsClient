import React, { Component } from 'react';

export class ProductName extends Component {  

  //shows product title and displays a link below to product show page
    
  render() { 
    
      return(  
        <div className="productName"> 
          <h4>{this.props.Title}</h4><br /> 
        </div>
      ); 
    }
  }

export default ProductName;