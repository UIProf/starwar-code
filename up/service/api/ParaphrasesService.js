import RestService from "./RestService";

class ParaphrasesServiceClass {

    constructor() {
        this.url = "paraphrases/";
    }

    get() {
        return RestService.get(this.url);
    }

    post(param) {
        return RestService.post(this.url, param);
    }

    delete(paraphraseId) {
        return RestService.delete(this.url + "/" + paraphraseId);
    }
}

const ParaphrasesService = new ParaphrasesServiceClass();

export default ParaphrasesService;