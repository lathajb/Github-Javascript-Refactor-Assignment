'use strict';

import { fetchIntentInfo } from './recast-api.service';
import { renderConfirmMsg } from '../create-repo/message-render.js';
import { createRepositoryView } from '../create-repo/create-repo.view.js';
import { createIssueView } from '../create-issue/create-issue.view.js';
import { updateIssueView } from '../update-issue/update-issue.view.js';
import { fetchIssuesView } from '../fetch-issues/fetch-issues.view.js';
import { createCollaboratorView } from '../create-collaborator/create-collaborator.view.js';

function invokeRecastIntentApi(recastObj) {

  return fetchIntentInfo(recastObj).then((data) => {
    console.log(data);

    var queryName = null;

    if (typeof data.results.intents[0].slug !== 'undefined' && data.results.intents[0].slug !== null) {


      if (data.results.intents[0].slug === 'create-repo' && typeof data.results.entities.git_repo !== 'undefined' && data.results.entities.git_repo !== null) {
        queryName = data.results.entities.git_repo[0].value;
        console.log(`repository name :${JSON.stringify(data.results.entities.git_repo[0])}`);
        recastObj.queryText = queryName;
        createRepositoryView(recastObj);
      }
      if (data.results.intents[0].slug === 'create-issue' && typeof data.results.entities.git_issue !== 'undefined' && data.results.entities.git_issue !== null) {
        queryName = data.results.entities.git_issue[0].value;
        let repoName = data.results.entities.git_repo[0].value;
        console.log(`repository name :${JSON.stringify(data.results.entities.git_issue[0])}`);
        recastObj.queryText = repoName;
        recastObj.issueName = queryName;
        createIssueView(recastObj);
      }

      if (data.results.intents[0].slug === 'fetch-repo-issues' && typeof data.results.entities.fetch_issues !== 'undefined' && data.results.entities.fetch_issues !== null) {
        recastObj.intentType = data.results.entities.fetch_issues[0].value;
        console.log(`repository name :${JSON.stringify(data.results.entities.fetch_issues[0])}`);
        fetchIssuesView(recastObj);
      }

      if (data.results.intents[0].slug === 'update-issue' && typeof data.results.entities.update_issue !== 'undefined' && data.results.entities.update_issue !== null) {
        recastObj.intentType = data.results.entities.update_issue[0].value;
        console.log(`repository name :${JSON.stringify(data.results.entities.update_issue[0])}`);
        if (data.results.entities.git_repo[0] !== null)
          recastObj.repoName = data.results.entities.git_repo[0].value;

        if (data.results.entities.number[0] !== null)
          recastObj.issueNumber = data.results.entities.number[0].scalar;
        updateIssueView(recastObj);
      }

      if (data.results.intents[0].slug === 'create-collaborator' &&
        typeof data.results.entities.git_collaborator !== 'undefined' &&
        data.results.entities.git_collaborator !== null) {
        recastObj.intentType = data.results.entities.git_collaborator[0].value;
        //recastObj.repoName = data.results.entities.git_repo[0].value;
        console.log(`repository name :${JSON.stringify(data.results.entities.git_collaborator[0])}`);
        createCollaboratorView(recastObj);
      }
    }

  }).catch((error) => {
    console.log('There has been a problem while Invoking Recast API: ', error.message);
    renderConfirmMsg('Error While Invoking Recast API', "error");
  });


}


export { invokeRecastIntentApi };
