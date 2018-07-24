'use strict';

const createHTMLElement = require('../github-login/createHTMLElement');
import {createIssueController} from './create-issue.controller.js';

//module.exports = (recastObj,issueObj) => {

    function createIssueWidget(recastObj,issueObj){
      
      const githubCreateIssueForm = createHTMLElement(`
        <div class="createWidget" id="createWidget">
        <div class="card">
        <div class="card-header" id="cardHeader">
            <h4>Create Issue</h4>
        </div>
        <div class="card-body" id="cardBody">
            <!--<h5 class="card-title">Special title treatment</h5>-->


            <form>
                <div class="form-group row">
                    <label for="createIssue" class="col-sm-2 col-form-label alignCenter">Issue</label>
                    <div class="col-md-10 alignCenter" >
                        <input type="text" 
                               class="form-control" 
                               id="createIssue" 
                               value=${recastObj.issueName}
                               placeholder="Enter issue name" readonly>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="issueDescription" class="col-sm-2 col-form-label alignCenter">Description</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control" id="issueDescription">
                    </div>
                </div>

                 <div class="form-group row">
                    <label for="repositoryName" class="col-sm-2 col-form-label alignCenter">Repository</label>
                    <div class="col-md-10 alignCenter" >
                        <input type="text" class="form-control" 
                               id="repositoryName"
                               value=${recastObj.queryText}>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="labels" class="col-sm-2 col-form-label alignCenter">Labels</label>

                    <div class="dropdown col-md-10">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Dropdown link
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
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

        const addButton = githubCreateIssueForm.querySelector('#confirmId');
                
                 addButton.addEventListener('click', e => {
                        e.preventDefault();
                        issueObj.description = document.getElementById('issueDescription').value;
                        let repoName = document.getElementById('repositoryName').value;
                        createIssueController(repoName,issueObj);
       });

       
       return githubCreateIssueForm;
};


 
export {createIssueWidget};
 