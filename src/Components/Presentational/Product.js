import React, { Component } from 'react';

export class Product extends Component {  
    
  render() { 
    
      return ( this.props.SalesRank !== 1000000000000 ?  
        <div className= "Product"> 
          <h3>{this.props.Title}</h3> 
          <h3>UPC: {this.props.UPC}</h3> 
          <h3>Cost:<div> ${this.props.Price.toFixed(2)}</div></h3> 
          <h3>SKU: {this.props.SKU}</h3> 
          <h3>Retail Selling Price:<div> ${this.props.retailSellingPrice.toFixed(2)}</div></h3>
          <h3>Amazon Fees:<div> ${this.props.amazonFees.toFixed(2)}</div></h3>
          <h3>Profit Margin: {(this.props.profitMargin.toFixed(4) * 100) + '%'}</h3>
          <h3>Sales Rank in Parent Category: {this.props.SalesRank}</h3><br /> 
        </div>
       : 
      <div className= "Product"> 
          <h3>{this.props.Title}</h3> 
          <h3>UPC: {this.props.UPC}</h3> 
          <h3>Cost:<div> ${this.props.Price.toFixed(2)}</div></h3> 
          <h3>SKU: {this.props.SKU}</h3> 
          <h3>Retail Selling Price:<div> ${this.props.retailSellingPrice.toFixed(2)}</div></h3>
          <h3>Amazon Fees:<div> ${this.props.amazonFees.toFixed(2)}</div></h3>
          <h3>Profit Margin: {(this.props.profitMargin.toFixed(4) * 100) + '%'}</h3>
          <h3>Sales Rank in Parent Category: No sales data available for this product.</h3><br /> 
        </div> 
      )
    }
  }

export default Product;