

export function AjaxWithPost(Url, Entity, SuccessCallback, FailureCallback) {
    $.ajax({
        url: Url,
        type: 'POST',
        dataType: 'json',
        data: Entity,
        //beforeSend: function (xhr) {
        //  //  xhr.setRequestHeader("Authorization", "Bearer  " + sessionStorage.AccessToken);
        //},
        success: function (data, statusText, xhr) {
            if (SuccessCallback) {
                SuccessCallback(data, statusText, xhr);
            }
        },
        error: function (xhr) {
            if (FailureCallback) {
                FailureCallback(xhr);
            }
        }
    });
}
