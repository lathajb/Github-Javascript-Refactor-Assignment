'use strict';

import {fetchIssuesWidget} from './fetch-issues.widget';
//const fetchIssuesWidget = require('./fetch-issues.widget');

function fetchIssuesView(recastObj) {

    const fetchIssuesModal = fetchIssuesWidget(recastObj);

    console.log(JSON.stringify(fetchIssuesModal)+" fetchIssuesModal");
    const widget = document.getElementById('createWidget');
      const parentObj = document.getElementById('searchFeature');
      if (widget !== null) {
        parentObj.removeChild(document.getElementById('createWidget'));
      }

    return parentObj.appendChild(fetchIssuesModal);

}


export { fetchIssuesView };


