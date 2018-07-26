
'use strict';

import {createCollaboratorService} from './create-collaborator.service.js';



function createCollaboratorController(collaboratorObj){
    return createCollaboratorService(collaboratorObj);
}


export {createCollaboratorController};