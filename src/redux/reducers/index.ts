import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// Set up our redux store state by combining all our reducers
// state store's repositories property value comes from repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
