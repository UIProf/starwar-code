import * as ActionUrls from "../constants/ActionUrls";
import {AjaxWithPost} from "./AjaxCall";

export function EnterpriseLogin(Payload) {
    return (dispatch, getState) => {
       // NProgress.start();
        var url = ActionUrls.EnterpriseLoginUrl;

        var successCallback = (function(data, statusText, xhr){
            if(data!=null){
                if(data.status==true){
                    sessionStorage.IsStaffLogin=1;
                    sessionStorage.UserName=data.userName;
                    sessionStorage.RoleName=data.roleName;
                    sessionStorage.userId=data.userId;
                    sessionStorage.roleID=data.roleID;
                    sessionStorage.permission=data.permission;
                    let Permissions=data.permission;
                   // dispatch(ReducerCall(Permissions,ActionTypes.Permissions));
                    //window.location.href="/home";  

                }
                if(data.status==false){
                    ShowNotification("W","You are not authorized to access the application. Please Contact Administrator");
                    window.location = "https://federation-sts-stage.accenture.com/adfs/ls/?wa=wsignout1.0";
                }
            }
            //NProgress.done();
        })

        var failureCallback = (function(xhr){
            var msg = xhr.responseText;
            msg = msg.substr(12);
            msg = msg.substr(0, msg.length - 2);
            ShowNotification("W",msg);
            //NProgress.done();
        })

        AjaxWithPost(url,Payload,successCallback,failureCallback);
    };
}

export function ShowNotification(type,msg) {
    switch(type){
        case 'S':
            notification['success']({
                message: 'Success!!!',
                description: msg,
                duration:AlertTimer,
              
            });
            break;
        case 'W':
            notification['warning']({
                message: 'Warning!!!',
                description: msg,
                duration:AlertTimer
            });
            break;
        default :
            notification['info']({
                message: 'Information!!!',
                description: msg,
                duration:AlertTimer
            });
            break;
    }
}
