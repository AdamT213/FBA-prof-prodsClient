import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function CreateDistributor(distributor){ 
  // return function(dispatch, getState){ 
  //   dispatch({type: 'ADD_PERSON'})
  //   return fetch('https://rateyouracquaintanceapi.herokuapp.com/people', {
  //   method: 'POST',
  //   headers: { 
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(person)})
  //   .then(res => {
  //     return res.json()
  //   }).then(responseJson => {
  //     dispatch({type: 'SET_PERSON', payload: responseJson})     
  //   }).then(res => { 
  //     let currentPerson = getState().peopleReducer.person
  //      if (currentPerson.id || currentPerson === "unfound") {
  //       history.push(`/people/${currentPerson.id}`)  
  //      } 
  //      else { 
  //       history.push(`/people/`)
  //      } 
  //   })
  // } 
}  

export function UploadFile(sheet) { 
  
}

// export function addReview(review, person){ 
//   return function(dispatch, getState){
//     dispatch({type: 'ADD_REVIEW'})
//     return fetch(`https://rateyouracquaintanceapi.herokuapp.com/people/${person.id}/reviews`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(review)}) 
//     .then(res => {
//       return res.json()
//     }).then(responseJson => {
//       dispatch({type: 'CONCAT_REVIEW', payload: responseJson}) 
//     }).then(res => { 
//       history.push(`/people/${getState().peopleReducer.person.id}`) 
//     })  
//   } 
// }   

// export function removePerson(){ 
//   return function(dispatch){
//    dispatch({type: 'CLEAR_PERSON'})
//  } 
// } 
