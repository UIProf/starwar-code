import ActionTypes from "../constants/ActionTypes";
import axios from 'axios';

export function loadTextVariables(APIlink) {
    return (dispatch) => {
        axios.get(APIlink)
        .then((response) => {
            dispatch({ type: ActionTypes.LOAD_TEXT_VARS, payload: response.data.TEXT })
        })
        .catch((error) => {
            alert(error);
        });
    }

};

export function loadImageVariables(APIlink) {
    return (dispatch) => {
        axios.get(APIlink)
        .then((response) => {
            dispatch({ type: ActionTypes.LOAD_IMAGE_VARS, payload: response.data.IMAGES })
        })
        .catch((error) => {
            alert(error);
        });
    }

};