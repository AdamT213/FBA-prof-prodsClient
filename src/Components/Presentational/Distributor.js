import React, { Component } from 'react'; 
import Product from './Product'; 

class Distributor extends Component {  
    
  render() { 
    // These are the attributes to show for each profitable product. In the list, only the name should be shown, and when you click the item, it should link to a show page with the following attributes (attributes shown in index for now):
    // Retail Selling Price
    // Amazon Fees
    // Product Cost
    // Profit Margin

    const Products =  this.props.products !== undefined ? this.props.products.map((prod, index) => {
    return <Product Title={prod.title} 
    UPC={prod.UPC} 
    Price={prod.Price} 
    SKU={prod.SKU} 
    amazonFees={prod.amazonFees}
    profitMargin={prod.profitMargin}
    retailSellingPrice={prod.retailSellingPrice} key={index} />}) : null  

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