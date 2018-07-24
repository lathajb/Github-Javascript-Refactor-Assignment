'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer eef87f267a7a90d9685d34df2079d58d50284840";
const user = 'lathajb';

function updateIssueService(issueObj) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": issueObj.repoName
        });

         var updatedObject ={
                
                    "title": issueObj.issueName,
                    "body": issueObj.issueDesc,
                    "assignees": [
                        "lathajb"
                    ],
                    
                    "state": issueObj.status,
                    "labels": [
                        "bug"
                    ]
              }

        fetch(rootUrl +  "repos/"+user+"/"+issueObj.repoName+"/issues/"+issueObj.issueNumber, {
            method: "PATCH",
            headers: header,
            mode: "cors", 
            credentials: "same-origin", 
            body: JSON.stringify(updatedObject)
            
        }).then((data) => {
            console.log(data);
            
            if(data.ok === false){
                renderConfirmMsg(data.statusText,"error");
            }else {
                var msg = 'Issue Updated Successfully';
                renderConfirmMsg(msg,"success");
            }
            }).catch((error) => {
            console.log('There has been a problem with your update issue operation: ', error.message);
            let msg = 'Error While updating Issue';
            renderConfirmMsg(error.message,"error");
        });

    }



export {updateIssueService};