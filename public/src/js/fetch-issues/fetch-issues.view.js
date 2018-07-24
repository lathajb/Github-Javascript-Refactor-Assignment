'use strict';

import {fetchIssuesWidget} from './fetch-issues.widget';
//const fetchIssuesWidget = require('./fetch-issues.widget');

function fetchIssuesView(recastObj) {

    const fetchIssuesModal = fetchIssuesWidget(recastObj);

    const widget = document.getElementById('createWidget');
      const parentObj = document.getElementById('searchFeature');
      if (widget !== null) {
        parentObj.removeChild(document.getElementById('createWidget'));
      }
    return document.getElementById('searchFeature').append(fetchIssuesModal);

}


export { fetchIssuesView };


