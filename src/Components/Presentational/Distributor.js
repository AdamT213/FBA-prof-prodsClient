import React, { Component } from 'react'; 
import ProductName from './ProductName'; 
import { SetCurrentProduct } from '../../Actions/ProductActions'

class Distributor extends Component {  

  handleClick = event => { 
    event.preventDefault();
    let product = {};
    product.id= event.target.id;
    this.props.SetCurrentProduct(product);   
  }
    
  render() { 
    // These are the attributes to show for each profitable product. In the list, only the name should be shown, and when you click the item, it should link to a show page with the following attributes:
    // Retail Selling Price
    // Amazon Fees
    // Product Cost
    // Profit Margin 
    //Title 
    //Cost
    //UPC

    const Products =  this.props.products !== undefined ? this.props.products.map((prod, index) => {
    return <div> <ProductName Title={prod.title} key={index}/> 
    <button id={prod.id} onClick={this.handleClick}>See Details</button>
     </div>}) : null  

        return( 
          <div className= "container">
            <p>{this.props.name}</p><br />
            <ul> 
              {Products}
            </ul><br /> 
          </div>
        ); 
      }
    }
 
export default Distributor;