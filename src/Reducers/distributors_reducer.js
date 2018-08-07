export function DistributorsReducer(state = {distributor: null, distributors: {}
}, action) {
  switch (action.type) {
      case 'SET_DISTRIBUTOR':  
        let currentDistributor = action.payload;
        return {distributor: currentDistributor}; 
      case 'UPLOAD_AND_PARSE': 
        return {distributor: currentDistributor};
      case 'CLEAR_DISTRIBUTOR': 
        return {distributor: null, distributors: {}} 
      default:
       return state; 
  }
} 