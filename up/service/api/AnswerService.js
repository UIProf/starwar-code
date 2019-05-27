import RestService from "./RestService";

class AnswerServiceClass {

    constructor() {
        this.url = "answers/";
    }

    get() {
        return RestService.get(this.url);
    }

    post(param) {
        return RestService.post(this.url, param);
    }

    delete(answerId) {
        return RestService.delete(this.url + "/" + answerId);
    }
}

const AnswerService = new AnswerServiceClass();

export default AnswerService;