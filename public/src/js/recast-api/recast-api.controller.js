
import { fetchIntentInfo } from './recast-api.service';
import { renderConfirmMsg } from '../create-repo/message-render';
import { createRepositoryView } from '../create-repo/create-repo.view';
import  createIssueView  from '../create-issue/create-issue.view';
import { updateIssueView } from '../update-issue/update-issue.view';
import { fetchIssuesController } from '../fetch-issues/fetch-issues.controller';
import { createCollaboratorController } from '../create-collaborator/create-collaborator.controller';
import { fetchIssuesView } from '../fetch-issues/fetch-issues.view';
import { issueListWidget } from '../fetch-issues/fetch-issues.widget';
import { createCollaboratorView } from '../create-collaborator/create-collaborator.view';

import constants from '../state-management/constants';
import store from '../state-management/github-store';

const collaboratorObj = {
  user: "lathajb",
  repoName: null,
  collaborator: "Triveni-Gaikwad"

};


function invokeRecastIntentApi(recastObj) {

  return fetchIntentInfo(recastObj).then((data) => {
    console.log(data);

    let queryName = null;

    if (typeof data.results.intents[0].slug !== 'undefined' && data.results.intents[0].slug !== null) {


      if (data.results.intents[0].slug === 'create-repo' && typeof data.results.entities.git_repo !== 'undefined' && data.results.entities.git_repo !== null) {
        queryName = data.results.entities.git_repo[0].value;
        console.log(`repository name :${JSON.stringify(data.results.entities.git_repo[0])}`);
        recastObj.queryText = queryName;
         console.log("Current state :"+store.getState());
  
         let payload = [];
         let ressult = {
            slug : data.results.intents[0].slug,
            queryText : recastObj.queryText,
            repoName : recastObj.queryText,
            isWidgetReady : true,
            completion : false
         }
         payload.push(ressult);

         const createRepoObj = {
           id: 1, 
           createRepo: {
             name: 'my repo name',
             description: 'some description'
           },
           response: ''
         }
         
         store.dispatch({type:constants.RECAST_API_QUERY_CHANGE, createRepoObj});
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
        let githubFetchIssueForm = fetchIssuesView(recastObj);
        const addButton = githubFetchIssueForm.querySelector('#confirmId');

        addButton.addEventListener('click', e => {
          e.preventDefault();
          recastObj.repoName = document.getElementById('repositoryName').value
          //let issueDetails = fetchIssuesController(recastObj);

          fetchIssuesController(recastObj)
            .then((data) => {
              console.log(data);
              issueListWidget(data);
            }).catch((error) => {
              var msg = 'Error While retreving issues';
              renderConfirmMsg(msg, "error");
            });


        });

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
        let githubCollaboratorForm = createCollaboratorView(recastObj);
        const addButton = githubCollaboratorForm.querySelector('#confirmId');

        addButton.addEventListener('click', e => {
          e.preventDefault();
          collaboratorObj.repoName = document.getElementById('repoName').value
          createCollaboratorController(collaboratorObj);
        });
      }
    }

  }).catch((error) => {
    // console.log('There has been a problem while Invoking Recast API: ', error.message);
    renderConfirmMsg('Error While Invoking Recast API', "error");
  });


}


store.subscribe(() =>{
    // console.log(store.getState(), "from subscribe ");
    console.log("from scubscriber :" , JSON.parse(localStorage.getItem('redux-store')));
    console.log("store.getState()", store.getState());
    
});

 export { invokeRecastIntentApi };
