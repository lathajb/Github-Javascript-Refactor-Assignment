
import './src/scss/styles.scss';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import jQuery from 'jquery';

import { invokeRecastIntentApi } from './src/js/recast-api/recast-api.controller';
import { createRepository } from './src/js/create-repo/create-repo.controller';
import { createLoginView } from './src/js/github-login/github-login.view';
import { createRepositoryView } from './src/js/create-repo/create-repo.view';



window.$ = window.jQuery = jQuery;


const recastObj = {
  queryText: null,
  intentType: null,
  issueNumber: null,
  repoName: null,
};


 document.addEventListener('DOMContentLoaded', (event) => {
  // $('[data-toggle="tooltip"]').tooltip();


 document.getElementById('searchQuery').addEventListener('click', invokeRecastApi);
   
   
   console.log(" **************************** :" , JSON.parse(localStorage.getItem('redux-store')));
     const resp = localStorage.getItem('redux-store');
  
     if(resp){
      let resultObj = JSON.parse(localStorage.getItem('redux-store'));

      console.log("******************",resultObj);
      resultObj.forEach(query => {
          console.log(query);

              var tempObj ={
                queryText : query.createRepo.name,
                id: query.createRepoObj.id,
                description : query.createRepoObj.createRepo.description
              }
              createRepositoryView(tempObj); 
      });
  }


  //invokeLoginView();
});


function invokeRecastApi() {
  const searchQuery = document.getElementById('searchId').value;
  recastObj.queryText = searchQuery;



  const intentType = invokeRecastIntentApi(recastObj);
  // methodToInvoke(searchQuery,intentType);
}

function invokeLoginView() {
  const createLoginModal = createLoginView();
  document.body.appendChild(createLoginModal);
  $('#exampleModal').modal();
}
