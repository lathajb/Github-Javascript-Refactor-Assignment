'use strict';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import { createRepo } from './create-repo.service.js';
import { createRepoWidget } from './create-repo.widget';
import constants from '../state-management/constants';
import store from '../state-management/github-store';
import {renderConfirmMsg}  from '../create-repo/message-render.js';




$(function () {
    $(document).on("click", ".createWidget .saveRepoConfirm", function () {

        console.log(" from controller : ", document.querySelector('.createRepository').value);
        console.log("recast id : ", document.querySelector('.repoId').value);
        
let repositoryObj = {
            name: $(this).parents(".createWidget").find('.createRepository').val(),
            description: $(this).parents(".createWidget").find('.repoDescription').val(),
            homepage: "https://github.com",
            private: false,
            id: $(this).parents(".createWidget").find('.repoId').val()
};

        let createRepoObj = {
            id:repositoryObj.id,
            createRepo: {
                name: repositoryObj.name,
                description: repositoryObj.description,
                response: ''
            }
        }
        createRepo(repositoryObj).then((data) => {
            console.log(data);
            
            if(data.message === "Bad credentials"){
                renderConfirmMsg(data.statusText,"error");
                createRepoObj.createRepo.response = data.message;
                console.log(data);
                store.dispatch({ type: constants.CREATE_REPO, createRepoObj });
            }else {
                var msg = 'Repository Created Successfully';
                renderConfirmMsg(msg,"success");
                createRepoObj.createRepo.response = 'success';
                store.dispatch({ type: constants.CREATE_REPO, createRepoObj });
            }
            }).catch((error) => {
                console.log('There has been a problem with your create repository operation: ', error.message);
                let msg = 'Error While Creating Repository';
                renderConfirmMsg(error.message,"error");
                createRepoObj.createRepo.response = 'error';
               // store.dispatch({ type: constants.CREATE_REPO, createRepoObj });
            });

        

    });
});

function createRepository(repositoryObj) {
    return createRepo(repositoryObj);
}


export { createRepository };