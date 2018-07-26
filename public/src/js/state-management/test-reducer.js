
module.exports = (state = null,action) =>{

if(action.type === 'ADD_REPO'){
return action.payload;
}else{
    return state;
}

}