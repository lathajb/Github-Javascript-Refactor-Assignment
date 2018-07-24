'use strict';

//import {createLoginWidgetHTML} from './github-login.widget';
//const createCollaboratorWidget = require('./create-collaborator.widget');
import {createCollaboratorWidget} from './create-collaborator.widget';


let collaboratorObj = {
    "user": "lathajb",
    "repoName": null,
    "collaborator": "Triveni-Gaikwad"

};


function createCollaboratorView(recastObj) {
    //collaboratorObj.repoName = recastObj.repoName;
    
    const createCollaboratorModal = createCollaboratorWidget(collaboratorObj);

    const widget = document.getElementById('createWidget');
      const parentObj = document.getElementById('searchFeature');
      if (widget !== null) {
        parentObj.removeChild(document.getElementById('createWidget'));
      }

    return document.getElementById('searchFeature').append(createCollaboratorModal);
}

export { createCollaboratorView };

