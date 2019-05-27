import DocumentService from "../service/api/DocumentService";
import ActionTypes from "../constants/ActionTypes";

export const getDocument = () => {

    return (dispatch) => {
        DocumentService.get()
            .then((response) => {
                dispatch(getAllDocument(response));
            })
            .catch();
    }
}

const getAllDocument = (documentObject) => {
    return {
        type: ActionTypes.GET_DOCUMENTS,
        payload: {
            document: documentObject
        }
    }
}

export const addNewDocument = (documentObject) => {
    return (dispatch) => {
        console.log('documentObject : ', documentObject.doc_file);
        DocumentService.post(documentObject)
            .then(() => {
                console.log("New Document Added...");
            })
            // .the(window.location.reload())
            .catch(
                error => console.log(error)
            );
    }

}