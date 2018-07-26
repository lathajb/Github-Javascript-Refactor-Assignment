
import { createIssueWidget } from './create-issue.widget';

const issueObj = {
  title: null,
  body: null,
  assignees: ['lathajb'],
  labels: ['bug']
};


function createIssueView(recastObj) {
  issueObj.title = recastObj.queryText;
  const createIssueModal = createIssueWidget(recastObj, issueObj);

  const widget = document.getElementById('createWidget');
  const parentObj = document.getElementById('searchFeature');
  if (widget !== null) {
    parentObj.removeChild(document.getElementById('createWidget'));
  }
  return document.getElementById('searchFeature').append(createIssueModal);
}

export default createIssueView;
