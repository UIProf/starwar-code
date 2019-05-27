import { browserHistory } from 'react-router';
import axios from 'axios';
import { getAPIUrl } from './GlobalActions';
//   import cookie from 'react-cookie'; ?? use local storage?
import { withRouter } from "react-router-dom";

import ActionTypes from '../constants/ActionTypes';

const { SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, INVALID_USER_ID, INVALID_PASSWORD, LOGOUT_USER } = ActionTypes;

//= ===============================
// Authentication actions
//= ===============================

let API_URL = getAPIUrl();

// console.log('API URL: ' + API_URL);


export const login = (userName, password, history) => {
    return (dispatch) => {
        // console.log("run login");
        // dispatch(setLoginPending(true));
        // dispatch({ type: INVALID_USER_ID, payload: false });
        // dispatch({ type: INVALID_PASSWORD, payload: false });

        console.log("history:", history);

        // userid && pwd has content? call API
        if (userName && userName.length > 0 && password && password.length > 0) {
            callLoginApi(userName, password, error => {
                // console.log('callLoginApi->: ', error);
                if (!error) {
                    // dispatch(setLoginSuccess(arguments));
                } else {
                    // dispatch(setLoginError(error));
                }
            }, dispatch, history);
        } else {
            // console.log('LoginReducer.login --> info empty');
            // dispatch(setLoginPending(false));
            // if (userName && userName.length === 0) {
            //     dispatch({ type: INVALID_USER_ID, payload: true });
            // }
            // if (password && password.length === 0) {
            //     dispatch({ type: INVALID_PASSWORD, payload: true });
            // }
        }

    }
}

export function logout() {
    return (dispatch) => {
        // remove user from local storage to log user out
        localStorage.removeItem('login');
        localStorage.removeItem('employeesFeedback');
        localStorage.removeItem('employeesApproved');
        dispatch({ type: LOGOUT_USER, payload: false });
        if (getAPIUrl().indexOf('accenture') > -1){
            console.log("relogin");
            // dispatch(login("a", "a"));
            // in actual SSO, we want to login user automatically and logout user properly though SSO, this is to be updated.
            window.location = 'applogin/' + window.location.search;
        }else{
            console.log("logout");
            window.location = 'applogin/' + window.location.search;
        };
    }
}

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        payload: {
            isLoginPending: isLoginPending
        }
    };
}

function setLoginSuccess(isLoginSuccess) {
    browserHistory.push('/');
    return {
        type: SET_LOGIN_SUCCESS,
        payload: {
            isLoginSuccess: isLoginSuccess
        }
    };
}

function setLoginError(loginError) {
    // console.log('setLoginError->', loginError);
    // browserHistory.push('/');
    return {
        type: SET_LOGIN_ERROR,
        payload: {
            loginError:loginError
        }
    }
}

function callLoginApi(userName, password, callback, dispatch, history) {
    // console.log('AuthActions.callLoginApi => ' + userName + " " + password);
    axios.post(`${API_URL}/auth`, { userName, password })
    .then((response) => {
        const self = this;
        // dispatch(setLoginPending(false));

        if (response.data && response.data.loginSuccess) {
            console.log('Login Profile: ', response.data);
            const domain = response.data.domain || 'GP';

            dispatch({
                type: SET_LOGIN_SUCCESS,
                payload: response.data
            });
            localStorage.setItem('login', JSON.stringify(response.data));

            // window.location = '/' + window.location.search; // browserHistory.push('/'); <--old method, problematic for loading socket
            if (domain) {
                console.log('Change Location');
                console.log('History', history);
                history.push({
                    pathname: '/',
                    search: '?domain=' + domain
                });
            } else {
                // dispatch({ type: SET_LOGIN_ERROR, payload: 'Please use an admin account within a domain' });
            }
        }
        else {
            // dispatch({ type: SET_LOGIN_ERROR, payload: 'Invalid ID or password' });
        }

    })
    .catch((error) => {
        // dispatch({ type: SET_LOGIN_ERROR, payload: 'Invalid ID or password' });
    });
}