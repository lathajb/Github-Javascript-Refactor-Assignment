'use strict';

const createHTMLElement = require('./createHTMLElement');

module.exports = () => {
      
      const githubLoginForm = createHTMLElement(`
        <div class="modal fade" id="exampleModal" 
             tabindex="-1"
             data-keyboard="false"
             data-backdrop="static" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Github Login</h5>
                   <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button> -->
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-3">
                         User Name:
                        </div>
                        <div class="col-sm-3">
                         <input type="text" placeholder="Enter user name"></input>
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-sm-3">
                         Password:
                        </div>
                        <div class="col-sm-3">
                         <input type="password" placeholder="Enter password"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
        </div>
      `);

       githubLoginForm.addEventListener('submit', e => {
         e.preventDefault();

         const name = githubLoginForm.elements['name'].value;
         const password = githubLoginForm.elements['password'].value;

         //createRepositoryController({name, password}, githubLoginForm);
       });

       return githubLoginForm;
};


 

 