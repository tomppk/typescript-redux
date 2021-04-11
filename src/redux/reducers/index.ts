import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// Set up our redux store state by combining all our reducers
// state store's repositories property value comes from repositoriesReducer
// State inside redux store is going to be an object that has repositories key
// and value for that key is going to come from repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// Allow Typescript to infer the 'RootState' type from our reducers
// ReturnType<typeof reducers> means we have a variable reducers that is a
// function. When we call that function it is going to internally call some
// of our reducers that are going to give us back an object that kind of looks
// like this {repositories: repositoriesReducer}. We make use of built-in helper
// in Typescript ReturnType to say take this 'reducers' function and give us back
// the type that it returns. We are then going to assign that type to RootState.
// RootState then accurately describes the type of data that is going to be inside
// our redux store ie. an object with repositories key and value that
// satisfies the RepositoriesState interface {repositories: RepositoriesState}
export type RootState = ReturnType<typeof reducers>;
