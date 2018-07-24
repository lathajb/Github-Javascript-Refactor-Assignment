'use strict';

import {fetchIssues} from './fetch-issues.service.js';


function fetchIssuesController(requestObj){
    return fetchIssues(requestObj);
}


export {fetchIssuesController};