import RestService from "./RestService";

class DocumentServiceClass {

    constructor() {
        this.url = "documents/";
    }

    get() {
        return RestService.get(this.url);
    }

    post(param) {
        console.log("param :", param);
        return RestService.post(this.url, param);
    }

    delete(documentId) {
        return RestService.delete(this.url + "/" + documentId);
    }
}

const DocumentService = new DocumentServiceClass();

export default DocumentService;