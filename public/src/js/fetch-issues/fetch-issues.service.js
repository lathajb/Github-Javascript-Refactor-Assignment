'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer 1d7bdc0f9eeb455f58457772aa2cac1f8345677e";
const user = 'lathajb';



function fetchIssues(requestObj) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": requestObj.repoName
        });

        return fetch(rootUrl + "repos/"+user+"/"+requestObj.repoName+"/issues", {
            method: "GET",
            headers: header,
            mode: "cors", 
            credentials: "same-origin", 
            
        }).then(response => response.json()) 
        .catch(error => console.error(`Fetch Error =\n`, error));
        

    }



export {fetchIssues};


