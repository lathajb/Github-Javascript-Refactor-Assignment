import { createStore } from 'redux';
//import * as initialState from './github-state'
import * as constants from './constants'

const widgetReducer = function (state = [], action) {
  console.log("action", action);
  switch (action.type) {
    case constants.RECAST_API_QUERY_CHANGE:
      const {createRepoObj} = action;
      let resultObj = [...state, createRepoObj];
      localStorage.setItem('redux-store', JSON.stringify(resultObj));
      return resultObj;
    case constants.CREATE_REPO:
      let updatedRepoObj = JSON.parse(localStorage.getItem('redux-store'));
      if (action.createRepoObj)
      var a = parseInt(action.createRepoObj.id)
      var objIndex = updatedRepoObj.findIndex((obj => obj.id == a));
      console.log("find index : ----------", objIndex);
      updatedRepoObj[objIndex] = action.createRepoObj;
      localStorage.setItem('redux-store', JSON.stringify(updatedRepoObj));
      console.log("updated local storeage : ", JSON.parse(localStorage.getItem('redux-store')));
      break;
      //return updatedRepoObj;
  }

}

export default widgetReducer;
