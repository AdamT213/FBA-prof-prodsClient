import React, { Component } from 'react';

export class ProductName extends Component {  

  //shows product title and displays a link below to product show page
    
  render() { 
    
      return(  
        <div className= "Product"> 
          <h3>{this.props.Title}</h3><br /> 
        </div>
      ); 
    }
  }

export default ProductName;