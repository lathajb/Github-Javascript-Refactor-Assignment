'use strict';

import {createRepoWidget} from './create-repo.widget';



function createRepositoryView(recastObj){
  
   const fetchRepositoryModal = createRepoWidget(recastObj);

    console.log(JSON.stringify(fetchRepositoryModal)+" fetchRepositoryModal");
    const widget = document.getElementById('createWidget');
      const parentObj = document.getElementById('searchFeature');
      if (widget !== null) {
        parentObj.removeChild(document.getElementById('createWidget'));
      }

    return parentObj.prepend(fetchRepositoryModal);

}

export {createRepositoryView};

