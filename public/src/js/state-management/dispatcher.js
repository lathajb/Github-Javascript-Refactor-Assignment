import constants  from './constants';

var GithubDispatcher = function(dispatch) {

  return {
    invokeRecastAPI: function(intentType) {
      dispatch({
        type: constants.RECAST_API_QUERY_CHANGE,
        intentType: intentType,
      })
    }
  }
}

export default { GithubDispatcher };