'use strict';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import {createRepository} from './create-repo.controller.js';

function createWidgetHTML(repository) {
 
  return $.get('../../public/src/js/create-repo/pages/createRepository.html', (widgetHtml) => {
     //const widget = document.getElementById('createWidget');
     const parentObj = document.getElementById('searchFeature');
    //   // if (widget !== null) {
    //   //   parentObj.removeChild(document.getElementById('createWidget'));
    //   // }

    //   // const childWidget = document.createElement('createWidget');
     parentObj.innerHTML += widgetHtml;
    //   // parentObj.appendChild(childWidget);
    //  // $('#searchFeature').append(widgetHtml);
    //   $('#createWidget').ready(() => {
    //     //console.log(document.getElementById('confirmId'));
    //     document.getElementById('createRepository').value = repository.name;
    //     document.getElementById('confirmId').addEventListener('click', createRepository.bind(null, repository));
    //   });

    
    return widgetHtml;
    });
}


export {createWidgetHTML};

 

 