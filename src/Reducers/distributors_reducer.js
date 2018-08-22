export function DistributorsReducer(state = {distributor: null, distributors: []
}, action) {
  switch (action.type) { 
      case 'SET_DISTRIBUTORS':  
        return {distributors: state.distributors.concat(action.payload)} 
      case 'SET_DISTRIBUTOR':  
        let currentDistributor = state.distributors.find((d => d.id == action.payload.id));
        return {distributor: currentDistributor, distributors: state.distributors.concat(currentDistributor)};  
        case 'SET_DISTRIBUTOR_WITH_PRODUCTS': 
          return {distributor: action.payload, distributors: state.distributors};
      case 'UPLOAD_AND_PARSE': 
        return {distributor: state.distributor, distributors: state.distributors};  
      case 'CLEAR_DISTRIBUTOR': 
        return {distributor: null, distributors: state.distributors}
      default:
       return state; 
  }
} 