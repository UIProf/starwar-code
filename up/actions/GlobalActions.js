export const getAPIUrl = () => {
    let APIlink = "";

    if (window.location.hostname.indexOf("localhost") > -1) {
        APIlink = "//localhost:3000";
    } else {
        APIlink = "//" + window.location.hostname;
    }

    return APIlink;
};