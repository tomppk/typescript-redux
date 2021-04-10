import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

// Action creator to search npm api
// Use redux-thunk to manually dispatch actions.
// Can write as much async/await code and wait for response
// When response is received redux-thunk manually dispatches action with payload
// to reducers.
export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    // Dispatch search_repositories type action immediately when search is made
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      // Try to make get request to npm api. Add query string as per api
      // instructions with params object. Search term is term
      // Destructure data property from response object
      // Response object structure {objects: [ {package: { name: "react" }},
      // {package2: {name: "react-dom" }} ] }
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      // Map over data.objects array that contains objects. These objects
      // have package properties which have name etc. properties
      // Create a new array of package names as strings
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      // After successful response and mapping over response data and formatting
      // by getting an array of strings with package names we dispatch this action
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      // If catch error dispatch error type action with payload or error message
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
