import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Product  from './Presentational/Product'; 
import { history } from '../App'

export class ShowProduct extends Component { 
     
  render() { 

      return ( 
        <div> 
        <Product Title= {this.props.product.Title} UPC={this.props.product.UPC}  
          Price={this.props.product.Price} 
          SKU={this.props.product.SKU} 
          retailSellingPrice={this.props.product.retailSellingPrice}
          amazonFees={this.props.product.amazonFees}
          profitMargin={this.props.product.profitMargin}
         /> 
        </div> 
      ); 
    }
  }

function mapStateToProps(state){ 
  return {product: state.ProductsReducer.product}
}

export default connect(mapStateToProps, null)(ShowProduct);