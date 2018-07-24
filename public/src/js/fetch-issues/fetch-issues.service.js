'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer 529bc0d5e46ad8501d290d4388110b38998b7808";
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


