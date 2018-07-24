'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer 529bc0d5e46ad8501d290d4388110b38998b7808";
const user = 'lathajb';

function createCollaboratorService(collaboratorReqObj) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": collaboratorReqObj.repoName
        });
        let data ={};
        
        fetch(rootUrl +  "repos/"+user+"/"+collaboratorReqObj.repoName+"/collaborators/"+collaboratorReqObj.collaborator, {
            method: "PUT",
            headers: header,
            mode: "cors", 
            credentials: "same-origin", 
            body: JSON.stringify(data)
            
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



export {createCollaboratorService};