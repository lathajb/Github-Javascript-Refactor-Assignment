'use strict';

//import {createLoginWidgetHTML} from './github-login.widget';
//const createCollaboratorWidget = require('./create-collaborator.widget');
import {createCollaboratorWidget} from './create-collaborator.widget';



function createCollaboratorView(recastObj) {
    //collaboratorObj.repoName = recastObj.repoName;
    
    const createCollaboratorModal = createCollaboratorWidget();

    const widget = document.getElementById('createWidget');
      const parentObj = document.getElementById('searchFeature');
      if (widget !== null) {
        parentObj.removeChild(document.getElementById('createWidget'));
      }

    return parentObj.appendChild(createCollaboratorModal);
}

export { createCollaboratorView };

