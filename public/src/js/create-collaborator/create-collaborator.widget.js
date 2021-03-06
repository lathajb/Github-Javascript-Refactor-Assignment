'use strict';

//var createCollaboratorController = require('./create-collaborator.controller');
const createHTMLElement = require('../github-login/createHTMLElement');
import {createCollaboratorController} from './create-collaborator.controller';


//module.exports = (collaboratorObj) => {

function createCollaboratorWidget(){
      
      const githubCollaboratorForm = createHTMLElement(`
        <div class="createWidget" id="createWidget">
    <div class="card">
        <div class="card-header" id="cardHeader">
            <h4>Create Collaborator</h4>
        </div>
        <div class="card-body" id="cardBody">
            <!--<h5 class="card-title">Special title treatment</h5>-->

            <form>

                <div class="form-group row">
                    <label for="repoName" class="col-sm-2 col-form-label alignCenter">Repository Name</label>
                    <div class="col-sm-10 alignCenter">
                        <input type="text" class="form-control" 
                               id="repoName" 
                               placeholder="Enter repository name">
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
               
       return githubCollaboratorForm;
};


 
export {createCollaboratorWidget};
 