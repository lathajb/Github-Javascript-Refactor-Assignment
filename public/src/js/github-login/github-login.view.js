'use strict';

//import {createLoginWidgetHTML} from './github-login.widget';
const loginWidget = require('./github-login.widget');

function createLoginView(){
  return loginWidget();
}

export {createLoginView};

