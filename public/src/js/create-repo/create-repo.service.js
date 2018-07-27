'use strict';

import {renderConfirmMsg}  from '../create-repo/message-render.js';

const rootUrl = "https://api.github.com/";
const token = "Bearer b43d53e868d0e17219acf7cc8527858341bb8126";

function createRepo(repository) {
       
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
            "User-Agent": repository.repoName
        });

      return  fetch(rootUrl + 'user/repos', {
            method: "POST",
            headers: header,
            body: JSON.stringify(repository)
        }).then(response => response.json()) 
        .catch(error => console.error(`Fetch Error =\n`, error));
    }



export {createRepo};