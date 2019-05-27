import QuestionService from "../service/api/QuestionService";
import ActionTypes from "../constants/ActionTypes";

export const getQuestion = () => {

    return (dispatch) => {
        QuestionService.get()
            .then((response) => {
                dispatch(getQuestions(response));
            })
            .catch();
    }
}

const getQuestions = (questionObject) => {
    return {
        type: ActionTypes.GET_QUESTIONS,
        payload: {
            questions: questionObject
        }
    }
}

export const addNewQuestion = (questionToBeAdd) => {
    return (dispatch) => {
        QuestionService.post(questionToBeAdd)
            .then(() => {
                console.log("New Question Added...");
            })
            // .the(window.location.reload())
            .catch();
    }

}

export const deleteItem = (itemId) => {
    return (dispatch) => {
        QuestionService.delete(itemId)
            .then(() => {
                console.log("Item Deleted");
            })
            .catch((err) =>{
                console.log(err);
            });
    }
}

