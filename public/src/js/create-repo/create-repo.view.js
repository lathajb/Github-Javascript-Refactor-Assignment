'use strict';

import {createWidgetHTML} from './create-repo.widget';


let repositoryObj = {
            name: null,
            description: null,
            homepage: "https://github.com",
            private: false
};


function createRepositoryView(recastObj){
  repositoryObj.name = recastObj.queryText;
  return createWidgetHTML(repositoryObj);
}

export {createRepositoryView};

