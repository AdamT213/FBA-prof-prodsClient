import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Product  from './Presentational/Product'; 
import { history } from '../App' 
import { DeleteProduct} from '../Actions/ProductActions'

export class ShowProduct extends Component { 

  handleClick = event => { 
    event.preventDefault();
    let product = {};
    product.id= event.target.id;
    this.props.DeleteProduct(product);   
  }
     
  render() { 

      return ( 
        <div> 
        <Product Title= {this.props.product.Title} UPC={this.props.product.UPC}  
          Price={this.props.product.Price} 
          SKU={this.props.product.SKU} 
          retailSellingPrice={this.props.product.retailSellingPrice}
          amazonFees={this.props.product.amazonFees}
          profitMargin={this.props.product.profitMargin} SalesRank={this.props.SalesRank}
         /> 
         <button id={this.props.product.id} onClick={this.handleClick}>Delete This Product</button>
        </div> 
      ); 
    }
  }

function mapStateToProps(state){ 
  return {product: state.ProductsReducer.product}
}

export default connect(mapStateToProps, { DeleteProduct })(ShowProduct); 