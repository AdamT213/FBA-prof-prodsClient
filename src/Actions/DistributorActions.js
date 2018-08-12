import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function FindDistributors() {

  return function(dispatch, getState){ 
    dispatch({type: 'GET_DISTRIBUTORS'})
    return fetch('https://fba-prof-prods.herokuapp.com/api/distributors', {
      method: 'GET',
    }).then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_DISTRIBUTORS', payload: responseJson})     
    })
  } 
}   

export function SetCurrentDistributor(distributor){ 
  return function(dispatch, getState){ 
    dispatch({type: 'GET_DISTRIBUTOR'})
    return fetch(`https://fba-prof-prods.herokuapp.com/api/distributor/${distributor.id}`, {
    method: 'GET',
    })
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_DISTRIBUTOR_WITH_PRODUCTS', payload: responseJson})     
    }).then(res => { 
      let currentDistributor = getState().DistributorsReducer.distributor
      history.push(`/distributors/${currentDistributor.id}`)  
    })
  } 
}  

export function CreateDistributor(distributor){ 
  return function(dispatch, getState){ 
    dispatch({type: 'CREATE_DISTRIBUTOR'})
    return fetch('https://fba-prof-prods.herokuapp.com/api/distributors', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(distributor)})
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_DISTRIBUTOR', payload: responseJson})     
    }).then(res => { 
      let currentDistributor = getState().DistributorsReducer.distributor
      history.push(`/distributors/${currentDistributor.id}`)  
    })
  } 
}  

export function UploadFile(data) { 
  //Triggers post to route where file is uploaded to backend. This request completes, then triggers request to amazon sellers API for each JSONified item in list. This request completes and sends back prof_prods, triggering request to save each prof prod. User is then redirected to distributors show page with new prof prods added
  return function(dispatch, getState){ 
    debugger;
    let currentDistributor = getState().DistributorsReducer.distributor
    dispatch({type: 'UPLOAD_AND_PARSE'})
    return fetch(`https://fba-prof-prods.herokuapp.com/api/distributor/${currentDistributor.id}/upload`, {
    method: 'POST',
    body: data})
    .then(res => {
      return res.json()
    // }).then(responseJson => {
    //   dispatch({type: 'CHECK_PROFITABILITY', payload: responseJson}) 
    //   //somehow backend route needs to take json data parsed from file and check each product against Amazon Seller API to see if it is profitable   
    // }).then(res => { 
    //   return res.json()
    // }).then(responseJson => { 
    //   //API route will get back JSON response with profitable products, which can then be added to the current distributors list via CONCAT_PROF_PRODS, then redirect back to the show page
    //   dispatch({type: 'CONCAT_PROF_PRODS', payload: responseJson})
    // }).then(res => { 
    //   history.push(`/distributors/${currentDistributor.id}`)  
    })
  } 
}

export function removeDistributor(){ 
  return function(dispatch){
   dispatch({type: 'CLEAR_DISTRIBUTOR'})
 } 
} 
