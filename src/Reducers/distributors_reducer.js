export function DistributorsReducer(state = {distributor: null, distributors: {}
}, action) {
  switch (action.type) {
      case 'SET_DISTRIBUTOR':  
        let currentDistributor = action.payload;
        return {distributor: currentDistributor}; 
      case 'UPLOAD_AND_PARSE': 
        return {distributor: currentDistributor};
      case 'CONCAT_PROF_PRODS': 
        let newProfProds = action.payload 
        state.distributor.profProds.concat(newProfProds)
        return {distributor: state.distributor, distributors: state.distributors}; 
      case 'CLEAR_DISTRIBUTOR': 
        return {distributor: null, distributors: {}} 
      default:
       return state; 
  }
} 