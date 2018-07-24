'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer eef87f267a7a90d9685d34df2079d58d50284840";
const user = 'lathajb';



function fetchIssues(requestObj) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": requestObj.repoName
        });

        fetch(rootUrl + "repos/"+user+"/"+requestObj.repoName+"/issues", {
            method: "GET",
            headers: header,
            mode: "cors", 
            credentials: "same-origin", 
            
        }).then((data) => {
            console.log(data);
            
            if(data.ok === false){
                renderConfirmMsg(data.statusText,"error");
            }else {
                var msg = 'Issues Retrieved Successfully';
                renderConfirmMsg(msg,"success");
            }
            }).catch((error) => {
            console.log('There has been a problem while retriving issue operation: ', error.message);
            let msg = 'Error While retreiving Issue';
            renderConfirmMsg(error.message,"error");
        });
        

    }



export {fetchIssues};


