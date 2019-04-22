import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';
/* API URL */
const API_URL = "https://swapi.co/api/people";

export function fetchPeople(APIURL){
    let URL = APIURL ? APIURL : API_URL

  return function(dispatch){
      axios.get(URL)
          .then((response) => {
              console.log("dddd", response.data )
              dispatch({type:ActionTypes.FETCH_PEOPLE, payload:response.data});
          })
          .catch((err) => {
              dispatch({type:ActionTypes.FETCH_ERROR, payload:err});
          })
  }
}

  
export const fetchPeopleSuccess = users => ({
   
    type: ActionTypes.FETCH_PEOPLE,
    payload: { users }
});

export const fetchPeopleError = error => ({
    type: ActionTypes.FETCH_ERROR,
    payload: { error }
});



