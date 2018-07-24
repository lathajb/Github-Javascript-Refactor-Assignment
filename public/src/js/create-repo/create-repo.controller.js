'use strict';

import {createRepo} from './create-repo.service.js';


function createRepository(repositoryObj){
    return createRepo(repositoryObj);
}


export {createRepository};