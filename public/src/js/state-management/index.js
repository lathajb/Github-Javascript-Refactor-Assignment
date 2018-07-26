//import { createStore } from 'redux';
const testReducer = require("./test-reducer");
const {createStore} = require('redux');
//import { testReducer } from './test-reducer';
//import initialState  from './initialState.json'

let initialState =[
   { queryText :"create a repo with 7"}
]

const store = createStore(testReducer,initialState);

console.log("Current state :" , store.getState());

store.subscribe(()=>{
    console.log("Inside subscribe method", store.getState());
   // window.localStorage['redux-store'] = store.getState();

})

store.dispatch({
    type:'ADD_REPO',
    payload:[{
        queryText: "crate a repo with 3"}]
    
});

console.log("updated state :" , store.getState());
