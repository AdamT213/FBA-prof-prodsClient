import React, { Component } from 'react';

export class ProfProd extends Component {  
    
  render() { 
    
      return(  
        <div className= "ProfProd">
          <p>Total Monthly Sales: {this.props.totalMonthlySales}</p>
          <p>Retail Selling Price: {this.props.retailSellingPrice}</p>
          <p>Amazon Fees: {this.props.amazonFees}</p>
          <p>Product Cost: {this.props.productCost}</p>
          <p>Profit Margin: {this.props.profitMargin}</p>
          <p>Number of FBA Sellers: {this.props.numberOfSellers}</p> 
        </div>
      ); 
    }
  }

export default ProfProd;