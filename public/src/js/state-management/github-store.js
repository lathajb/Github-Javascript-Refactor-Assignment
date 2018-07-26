import { createStore } from 'redux';
import widgetReducer from './widget-reducer';
import { initialState } from './github-state';

//console.log("widgetReducer" , widgetReducer);
console.log("inital State" , initialState);
let fromLocalStorage = localStorage['redux-store'];

console.log("initalstate  from LocalStorage State" , fromLocalStorage);

let store = createStore(widgetReducer);
//console.log("Redux store :", store);
export default store;