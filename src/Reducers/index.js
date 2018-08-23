import { combineReducers } from 'redux';
import { DistributorsReducer } from "./distributors_reducer"  
import { ProductsReducer } from "./products_reducer" 

const rootReducer = combineReducers({
  DistributorsReducer, ProductsReducer,
 });
 
 export default rootReducer;