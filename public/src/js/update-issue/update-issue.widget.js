'use strict';

const createHTMLElement = require('../github-login/createHTMLElement');
import {updateIssue}  from './update-issue.controller.js';

//module.exports = (issueObj) => {
    function updateIssueWidget(issueObj){
      
      const githubUpdateIssueForm = createHTMLElement(`
        <div class="createWidget" id="createWidget">
    <div class="card">
        <div class="card-header" id="cardHeader">
            <h4>Close / Reopen Issue</h4>
        </div>
        <div class="card-body" id="cardBody">
            <!--<h5 class="card-title">Special title treatment</h5>-->


            <form>

                <div class="form-group row">
                    <label for="issueNumber" class="col-sm-2 col-form-label alignCenter">Issue Number</label>
                    <div class="col-md-10 alignCenter" >
                        <input type="text" class="form-control"
                               value=${issueObj.issueNumber} 
                               id="issueNumber" placeholder="Enter issue number">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="repo" class="col-sm-2 col-form-label alignCenter">Repository</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control" 
                               id="repo" 
                                value=${issueObj.repoName}
                               placeholder="Enter repository name">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="issueName" class="col-sm-2 col-form-label alignCenter">Issue Name</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control" id="issueName" 
                               placeholder="Enter issue name">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="issueDescription" class="col-sm-2 col-form-label alignCenter">Description</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" 
                               class="form-control" 
                               id="issueDescription"
                               placeholder="Enter description name">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="issueStatus" class="col-sm-2 col-form-label alignCenter">Status</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control" 
                               id="issueStatus">
                    </div>
                </div>
               

                <div class="form-group row">
                    <div class="col-sm-12 alignCenter">
                        <button type="button" class="btn" id="confirmId" data-toggle="tooltip" title="Confirm">Confirm</button>
                        <button type="button" class="btn" id="cancelId" data-toggle="tooltip" title="Cancel">Cancel</button>
                    </div>
                </div>
            </form>

        </div>
        <div class="card-footer text-muted" id="buttonSection">

        </div>
    </div>
</div>
      `);


      const addButton = githubUpdateIssueForm.querySelector('#confirmId');
                
                 addButton.addEventListener('click', e => {
                        e.preventDefault();
                        issueObj.description = document.getElementById('issueDescription').value;
                        issueObj.repoName  = document.getElementById('repo').value;
                        issueObj.status  = document.getElementById('issueStatus').value;
                        updateIssue(issueObj);
       });

       return githubUpdateIssueForm;
};


 export {updateIssueWidget};

 