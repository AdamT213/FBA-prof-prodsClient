import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function SetCurrentProduct(product){ 
  return function(dispatch, getState){ 
    dispatch({type: 'GET_PRODUCT'})
    return fetch(`https://fba-prof-prods.herokuapp.com/api/product/${product.id}`, {
    method: 'GET',
    })
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_PRODUCT', payload: responseJson})     
    }).then(res => { 
      let currentProduct = getState().ProductsReducer.product 
      let currentDistributor = getState().DistributorsReducer.distributor
      history.push(`/distributors/${currentDistributor.id}/products/${currentProduct.id}`)  
    })
  } 
}  

