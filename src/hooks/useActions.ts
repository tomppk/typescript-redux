// Custom hook to dispatch actions for other components to use
// useDispatch hook gives us access to dispatch() actions directly inside our
// component. We can useDispatch to manually dispatch an action creator
// We need to import our action creators as well
// bindActionCreators returns an object with action creators as keys and
// their return values dispatched as values
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

export const useActions = () => {
  // Variable to gain access to react-redux dispatch function
  // to dispatch actions
  const dispatch = useDispatch();

  // Turns an object whose values are action creators, into an object with the
  // same keys, but with every function wrapped into a dispatch call so they
  // may be invoked directly.
  // Returns an object that contains all the different action creators that are
  // provided in the first argument.
  // Now when we call these 'bound' action creators their return value will be
  // taken and automatically provided to second argument dispatch function
  // Object like this { searchRepositories: dispatch(searchRepositories(term))}
  return bindActionCreators(actionCreators, dispatch);
};
