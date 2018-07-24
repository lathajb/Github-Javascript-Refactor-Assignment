
import './src/scss/styles.scss';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import {invokeRecastIntentApi} from './src/js/recast-api/recast-api.controller';
import {createRepository} from './src/js/create-repo/create-repo.controller';
import {createLoginView}  from './src/js/github-login/github-login.view';



let recastObj ={
    "queryText":null,
    "intentType":null,
    "issueNumber":null,
    "repoName":null,
};


document.addEventListener('DOMContentLoaded', (event) => {
 // $('[data-toggle="tooltip"]').tooltip();
  document.getElementById('searchQuery').addEventListener('click', invokeRecastApi);
  //document.getElementById('loginId').addEventListener('click',invokeLoginView);
  invokeLoginView();
});

function invokeRecastApi() {
  const searchQuery = document.getElementById('searchId').value;
  recastObj.queryText = searchQuery;
  let intentType = invokeRecastIntentApi(recastObj);
  //methodToInvoke(searchQuery,intentType);
}

function invokeLoginView(){
    const createLoginModal = createLoginView();
    document.body.appendChild(createLoginModal);
    $('#exampleModal').modal();
}







