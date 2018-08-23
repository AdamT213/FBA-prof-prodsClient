export function ProductsReducer(state = {product: null, products: []
}, action) {
  switch (action.type) { 
      case 'SET_PRODUCT':  
        return {product: action.payload, products: state.products}   
      case 'CLEAR_PRODUCT': 
        return {product: null, products: state.products}
      default:
       return state; 
  }
} 