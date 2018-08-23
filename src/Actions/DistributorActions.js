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
  //Triggers post to route where file is uploaded to backend. This request completes, then triggers request to amazon sellers API for each JSONified item in list. This request completes
  return function(dispatch, getState){ 
    
    let currentDistributor = getState().DistributorsReducer.distributor 
    dispatch({type: 'UPLOAD_AND_PARSE'}) 
    
    return fetch(`https://fba-prof-prods.herokuapp.com/api/distributor/${currentDistributor.id}/upload`, {
    method: 'POST',
    body: data})
    .then(res => { 
       history.push('/') 
       alert("Please wait a few moments for your inventory sheet to be parsed. Then, click on the distributor's name to see the list of new products!" )
    }) 
  } 
}

export function removeDistributor(){ 
  return function(dispatch){
   dispatch({type: 'CLEAR_DISTRIBUTOR'})
 } 
} 

export function DeleteDistributor(distributor){ 
  return function(dispatch, getState){ 
    dispatch({type: 'DELETE_DISTRIBUTOR'})
    return fetch(`https://fba-prof-prods.herokuapp.com/api/distributor/${distributor.id}`, {
    method: 'DELETE',
    })
    .then(res => {
      return res.json()
    }).then(responseJson => { 
      history.push(`/`)  
    })
  } 
}   
