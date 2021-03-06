
'use strict';

const createHTMLElement = require('../github-login/createHTMLElement');
import { createRepository } from './create-repo.controller.js';

//module.exports = (recastObj,issueObj) => {

function createRepoWidget(recastObj) {

  const githubCreateRepoForm = createHTMLElement(`
<div class="createWidget">
    <div class="card">
        <div class="card-header" id="cardHeader">
            <h4>Create Repository</h4>
        </div>
        <div class="card-body" id="cardBody">
            <!--<h5 class="card-title">Special title treatment</h5>-->


            <form>
                <div class="form-group row">
                    <label for="createRepository" class="col-sm-2 col-form-label alignCenter">Repository</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control createRepository" 
                          value=${recastObj.queryText}  placeholder="Enter repository name">
                        <input type="hidden" class="repoId" name="repoId" value=${recastObj.id}>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="repoDescription" class="col-sm-2 col-form-label alignCenter">Description</label>
                    <div class="col-md-10 alignCenter">
                        <input type="text" class="form-control repoDescription" value=${recastObj.description ? recastObj.description  : ""} >
                    </div>
                </div>

                 <div class="form-group row">
                    <div class="col-sm-12 alignCenter">
                        <button type="button" class="btn saveRepoConfirm" data-toggle="tooltip" title="Confirm">Confirm</button>
                        <button type="button" class="btn cancelRepoConfirm" data-toggle="tooltip" title="Cancel">Cancel</button>
                    </div>
                </div>
            </form>
            
        </div>
        <div class="card-footer text-muted" id="buttonSection">
            
        </div>
    </div>
</div>
      `);

  return githubCreateRepoForm;
};


export { createRepoWidget };



