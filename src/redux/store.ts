import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Create our actual redux store
// First argument our combined reducers
// Second initial state of empty object
// Third redux-thunk middleware to enable async actions
export const store = createStore(reducers, {}, applyMiddleware(thunk));
