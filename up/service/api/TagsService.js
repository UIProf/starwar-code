import RestService from "./RestService";

class TagsServiceClass {

    constructor() {
        this.url = "tags/";
    }

    get() {
        return RestService.get(this.url);
    }

    post(param) {
        return RestService.post(this.url, param);
    }

    delete(tagId) {
        return RestService.delete(this.url + "/" + tagId);
    }
}

const TagsService = new TagsServiceClass();

export default TagsService;