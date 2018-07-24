'use strict';

import {createIssueService} from './create-issue.service.js';


function createIssueController(repoName,issueObj){
    return createIssueService(repoName,issueObj);
}


export {createIssueController};