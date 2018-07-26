'use strict';

const createHTMLElement = require('../github-login/createHTMLElement');
import {fetchIssuesController} from './fetch-issues.controller.js';
import {renderConfirmMsg}  from '../create-repo/message-render.js';

//module.exports = (recastObj) => {
 function fetchIssuesWidget(recastObj){

      const githubFetchIssueForm = createHTMLElement(`
      <div class="createWidget" id="createWidget">
       <div class="card">
        <div class="card-header" id="cardHeader">
            <h4>Issues</h4>
        </div>
        <div class="card-body" id="cardBody">
            <!--<h5 class="card-title">Special title treatment</h5>-->


            <form id="displayIssues">
                
                <div class="form-group row">
                    <label for="repositoryName" class="col-sm-2 col-form-label alignCenter">Repository Name</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control" id="repositoryName" placeholder="Enter repository name">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-12 alignCenter">
                        <button type="button" class="btn" id="confirmId" data-toggle="tooltip" title="Confirm">Confirm</button>
                        <button type="button" class="btn" id="cancelId" data-toggle="tooltip" title="Cancel">Cancel</button>
                    </div>
                </div>

                <div class="table-responsive" id="issuesListTable">
                    <table class="table table-md">
                    <thead id="issues-heading">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Issue Name</th>
                        <th scope="col">Description</th>
                       </tr>
                    </thead>
                    <tbody id="issues-details">
                        
                    </tbody>
                    </table>
                </div>
            </form>
        </div>
        <div class="card-footer text-muted" id="buttonSection">
                
        </div>
    </div>
</div>
      `);

     
        
       return githubFetchIssueForm;
};





function issueListWidget(issuesList){
    var issueList = document.getElementById('issues-details');

      var count = 1;
      issuesList.forEach(issue => {
      console.log(issue.title + " " + issue.body);
          var issueDetailsDive = document.createElement('tr');
          var issueDetialsSno = document.createElement('th');
              issueDetialsSno.setAttribute('scope','row');
              issueDetialsSno.setAttribute('id','tr'+count);
          var issueName = document.createElement('td');
              issueName.setAttribute('scope','col');
              issueName.setAttribute('id','issueName'+count);
          var issueDescription = document.createElement('td');
              issueDescription.setAttribute('scope','col');
              issueDescription.setAttribute('id','issueDescription'+count);
              
          issueDetailsDive.append(issueDetialsSno);
          issueDetailsDive.append(issueName);
          issueDetailsDive.append(issueDescription);
          issueList.append(issueDetailsDive);

          document.getElementById('tr'+count).innerHTML = issue.number;
          document.getElementById('issueName'+count).innerHTML = issue.title;
          document.getElementById('issueDescription'+count).innerHTML = issue.body;
          count++;
      });
      return issueList;
}


 export {fetchIssuesWidget,issueListWidget};

 