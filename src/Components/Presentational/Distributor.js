import React, { Component } from 'react'; 
import ProfProd from './ProfProd'; 

export class Distributor extends Component {  
    
  render() { 
    //These are the attributes to show for each profitable product. In the list, only the name should be shown, and when you click the item, it should link to a show page with the following attributes (attributes shown in index for now):
    // Total Monthly Sales
    // Retail Selling Price
    // Amazon Fees
    // Product Cost
    // Profit
    // Margin
    // Number of FBA Sellers

    const profProds =  this.props.profProds.map((product, index) => {
    return <ProfProd totalMonthlySales={product.totalMonthlySales} retailSellingPrice={product.retailSellingPrice} amazonFees={product.amazonFees} productCost={product.productCost} profitMargin={product.profitMargin} numberOfSellers={product.numberOfSellers} key={index} />});  
        return( 
          <div className= "container">
            <p>Name: {this.props.name}</p><br />
            <ul> 
              {profProds} 
            </ul><br /> 
          </div>
        ); 
      }
    }

export default Distributor;