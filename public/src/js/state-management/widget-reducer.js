import { createStore }  from 'redux';
//import * as initialState from './github-state'
import * as constants from './constants'

let initialState = {
    
                    queryText :[ {
                        id: 1,
                        slug : 'create_repo',
                        searchQuery : '',
                        repoName : '',
                        completion : false,
                        isWidgetReady : false
                    }]
            }
const widgetReducer = function (state = [], action) {
console.log("action", action);
switch (action.type) {
  case constants.RECAST_API_QUERY_CHANGE:
    const {createRepoObj} = action;

    let resultObj = [...state, createRepoObj];
    localStorage.setItem('redux-store',JSON.stringify(resultObj));
    return resultObj;
}
// const resp = localStorage.getItem('redux-store');
//   switch (action.type) {
//     case constants.RECAST_API_QUERY_CHANGE:
//         const {queryText} = action; 
//         console.log('queryText', queryText[0]);
//         const {slug, queryText, isWidgetReady} = queryText[0];
//         const obj = {slug, queryText, isWidgetReady};
//         console.log("obj", obj); 
//         return {};
//     default:
//      return state;
}

export default widgetReducer;
