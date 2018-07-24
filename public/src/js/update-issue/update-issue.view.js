'use strict';

//const updateIssueWidget = require('./update-issue.widget');
import {updateIssueWidget}  from './update-issue.widget';

var issueObj = {
    "title": null,
    "body": null,
    "assignees": ["lathajb"],
    "labels": ["bug"],
    "repoName":null,
    "issueNumber":null,
    "issueName":null,
    "issueDesc" : null,
    "status":null
};


function updateIssueView(recastObj) {
    
    issueObj.issueNumber = recastObj.issueNumber;
    issueObj.repoName = recastObj.repoName;
    const updateIssueModal = updateIssueWidget(issueObj);

    const widget = document.getElementById('createWidget');
      const parentObj = document.getElementById('searchFeature');
      if (widget !== null) {
        parentObj.removeChild(document.getElementById('createWidget'));
      }
    return document.getElementById('searchFeature').append(updateIssueModal);
}

export { updateIssueView };

