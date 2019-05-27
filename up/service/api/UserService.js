import RestService from "./RestService";

class UserServiceClass {

    constructor() {
        this.url = "users/";
    }

    get() {
        return RestService.get(this.url);
    }

    post(param) {
        return RestService.post(this.url, param);
    }

    delete(userId) {
        return RestService.delete(this.url + "/" + tagId);
    }
}

const UserService = new UserServiceClass();

export default UserService;