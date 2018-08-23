import React, { Component } from 'react';

export class Product extends Component {  
    
  render() { 
    
      return(  
        <div className= "Product"> 
          <h3>{this.props.Title}</h3> 
          <h3>UPC: {this.props.UPC}</h3> 
          <h3>Price: {this.props.Price}</h3> 
          <h3>SKU: {this.props.SKU}</h3> 
          <h3>Retail Selling Price: {this.props.retailSellingPrice}</h3>
          <h3>Amazon Fees: {this.props.amazonFees}</h3>
          <h3>Profit Margin: {(this.props.profitMargin.toFixed(4) * 100) + '%'}</h3>
          <h3>Sales Rank in Parent Category: {this.props.SalesRank}</h3><br /> 
        </div>
      ); 
    }
  }

export default Product;