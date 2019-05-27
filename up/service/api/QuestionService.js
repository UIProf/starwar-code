import RestService from "./RestService";

class QuestionServiceClass {

    constructor() {
        this.url = "questions/";
    }

    get() {
        return RestService.get(this.url);
    }

    post(param) {
        return RestService.post(this.url, param);
    }

    delete(questionId) {
        return RestService.delete("questions/" + questionId);
    }
}

const QuestionService = new QuestionServiceClass();

export default QuestionService;