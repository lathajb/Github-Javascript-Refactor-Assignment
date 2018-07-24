'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer eef87f267a7a90d9685d34df2079d58d50284840";
const user = 'lathajb';

function createIssueService(repoName,issueObj) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": repoName
        });

        fetch(rootUrl + "repos/"+user+"/"+repoName+"/issues", {
            method: "POST",
            headers: header,
            mode: "cors", 
            credentials: "same-origin", 
            body: JSON.stringify(issueObj)
            
        }).then((data) => {
            console.log(data);
            
            if(data.ok === false){
                renderConfirmMsg(data.statusText,"error");
            }else {
                var msg = 'Issue Created Successfully';
                renderConfirmMsg(msg,"success");
            }
            }).catch((error) => {
            console.log('There has been a problem with your create issue operation: ', error.message);
            let msg = 'Error While Creating Issue';
            renderConfirmMsg(error.message,"error");
        });
        

    }



export {createIssueService};