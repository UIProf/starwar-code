import ParaphrasesService from "../service/api/ParaphrasesService";
import ActionTypes from "../constants/ActionTypes";

export const getParaphrases = () => {

    return (dispatch) => {
        ParaphrasesService.get()
            .then((response) => {
                dispatch(getParaphrase(response));
            })
            .catch();
    }
}

const getParaphrase = (paraphraseObject) => {
    return {
        type: ActionTypes.GET_PARAPHRASES,
        paraphrase: paraphraseObject
    }
}

export const addParaphrases = (paraphrases) => {
    return (dispatch) => {
        ParaphrasesService.post(paraphrases)
            .then(() => {
                console.log("New Paraphrases Added...");
            })
            // .the(window.location.reload())
            .catch();
    }

}

export const deleteParaphrase = (itemId) => {
    return (dispatch) => {
        ParaphrasesService.delete(itemId)
            .then(() => {
                console.log("Item Deleted");
            })
            .catch((err) =>{
                console.log(err);
            });
    }
}