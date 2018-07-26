'use strict';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import {createRepo} from './create-repo.service.js';


 function createRepository(repositoryObj){
     return createRepo(repositoryObj);
 }

$(function () {
$(document).on("click", ".createWidget .saveRepoConfirm", function() {
let repositoryObj = {
            name: $(this).parents('.createWidget').find('.createRepository').value,
            description: null,
            homepage: "https://github.com",
            private: false
};

createRepo(repositoryObj);

});
});


export {createRepository};