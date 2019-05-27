import UserService from "../service/api/UserService";
import ActionTypes from "../constants/ActionTypes";

export const getUsers = () => {

    return (dispatch) => {
        UserService.get()
            .then((response) => {
                dispatch(getUser(response));
            })
            .catch();
    }
}

const getUser = (userObject) => {
    return {
        type: ActionTypes.GET_USERS,
        user: userObject
    }
}