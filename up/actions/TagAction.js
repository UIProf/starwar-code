import TagsService from "../service/api/TagsService";
import ActionTypes from "../constants/ActionTypes";

export const getTags = () => {

    return (dispatch) => {
        TagsService.get()
            .then((response) => {
                dispatch(getTag(response));
            })
            .catch();
    }
}

const getTag = (tagObject) => {
    return {
        type: ActionTypes.GET_TAGS,
        payload: {
            tags: tagObject
        }
    }
}