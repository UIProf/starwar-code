import AnswerService from "../service/api/AnswerService"
import ActionTypes from "../constants/ActionTypes";

export const getAnswer = () => {

    return (dispatch) => {
        AnswerService.get()
            .then((response) => {
                dispatch(getAllAnswer(response));
            })
            .catch();
    }
}

const getAllAnswer = (answerObject) => {
    return {
        type: ActionTypes.GET_ANSWERS,
        payload: {
            answer: answerObject
        }
    }
}

export const addNewAnswer = (answerToBeAdd) => {
    return (dispatch) => {
        AnswerService.post(answerToBeAdd)
            .then(() => {
                console.log("New Answer Added...");
            })
            // .the(window.location.reload())
            .catch();
    }

}