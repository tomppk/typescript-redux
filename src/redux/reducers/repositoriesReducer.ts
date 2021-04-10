import { Action } from '../actions';
import { ActionType } from '../action-types';

// Define interface that defines the state property's type
// Our redux store state will have following properties of following types
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// Define reducer. It will receive as arguments previous state
// and an action it needs to process.
// It will return new state object of type RepositoriesState
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    // When making new search loading set to true, error reset to null,
    // data reset to empty array. This is the action we see as soon as user
    // clicks on a search button, before receiving results or error.
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    // If got back successful response from api.
    // Set data value as action.payload so the response
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    // If we see error then the error message will be inside action.payload
    // Reset data to be empty array
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
