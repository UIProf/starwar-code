import React from "react";
import 'whatwg-fetch';
import * as configURL from "../../web.config";

let axiosConfig = () => {
    let headers;
    headers = new Headers({
        "Content-Type": "application/json;charset=UTF-8;",
        "Authorization": "Basic ZGV2X3VzZXI6QWNjJCQxMjM0"
    })

    return headers;
};
class RestServiceClass {

    _checkStatus(response) {

        if (response.ok) {
            return response;
        } else {
            console.log('Success:', JSON.stringify(response));
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    _handlerError(error) {
        return Promise.reject(error);
    }

    _parseJSON(response) {
        console.log('Success:', response);
        return response.json();
    }


    _fetch(url, options) {
        return fetch(url, options)
            .then(this._checkStatus)
            .then(this._parseJSON)
            .then(json => Promise.resolve(json))
            .catch(this._handlerError);
    }

    get(path) {
        let url = configURL.ApiUrl + path;
        let header = axiosConfig();
        const options = {
            method: 'GET',
            headers: header
        }

        return this._fetch(url, options);
    }

    post(path, data) {
        let url = configURL.ApiUrl + path;
        let header = axiosConfig();

        const options = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        }

        return this._fetch(url, options);
    }

    delete(path) {
        let url = configURL.ApiUrl + path;
        let header = axiosConfig();

        const options = {
            method: 'DELETE',
            headers: header
        }

        return this._fetch(url, options);
    }
}

const RestService = new RestServiceClass();

export default RestService;