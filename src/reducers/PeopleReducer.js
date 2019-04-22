import ActionTypes from '../constants/ActionTypes';

const initialState = {
   peoples: [],
  error: null
}

export default function peoplesreducer(state = initialState, action){

    switch(action.type){
        case ActionTypes.FETCH_PEOPLE:{
            console.log('payloaddata: ', action.payload)
            return {
                ...state,
                peoples: action.payload
            };
        }
        case ActionTypes.FETCH_ERROR:{
            return {
                ...state,
                error: action.payload,
                
            }
        }
        default:
        return state;
    }
}