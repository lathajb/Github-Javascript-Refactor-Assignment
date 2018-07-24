'use strict'

const accessToken = 'Token f6cc35ac38757d0a9edf24108f85e63f';
const uri= 'https://api.recast.ai/v2/request?text=';


function fetchIntentInfo(recastObj){

         return fetch(uri + recastObj.queryText , {
                method: "POST", 
                mode: "cors", 
                credentials: "same-origin", 
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": "application/json; charset=utf-8",
                },
               
            })
            .then(response => response.json()) 
            .catch(error => console.error(`Fetch Error =\n`, error.message));

}
     
export  {fetchIntentInfo};
