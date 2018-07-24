'use strict';

import {updateIssueService} from './update-issue.service.js';


function updateIssue(issueObj){
    return updateIssueService(issueObj);
}


export {updateIssue};