'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer 529bc0d5e46ad8501d290d4388110b38998b7808";

function createRepo(repository) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": repository.repoName
        });

        fetch(rootUrl + 'user/repos', {
            method: "POST",
            headers: header,
            body: JSON.stringify(repository)
        }).then((data) => {
            console.log(data);
            
            if(data.ok === false){
                renderConfirmMsg(data.statusText,"error");
            }else {
                var msg = 'Repository Created Successfully';
                renderConfirmMsg(msg,"success");
            }
            }).catch((error) => {
            console.log('There has been a problem with your create repository operation: ', error.message);
            let msg = 'Error While Creating Repository';
            renderConfirmMsg(error.message,"error");
            });
    }



export {createRepo};