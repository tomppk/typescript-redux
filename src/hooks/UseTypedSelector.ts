// This comes from official React-Redux documentation to make Typescript work
// https://react-redux.js.org/using-react-redux/usage-with-typescript
// This creates a pre-typed version of useSelector hook so Typescript knows the
// type and structure of our redux state
// useSelector hook gives our functional React components access to redux store
// similar to mapStateToProps() does for class components
// useTypedSelector throughout our app instead of un-typed useSelector
// This saves us the need to import and type (state: RootState) to every component

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// The documentation recommends using name useTypedSelector. But can also use
// the name useSelector by renaming useSelector import

// import {useSelector as _useSelector, TypedUseSelectedHook } from 'react-redux'
// import { RootState } from '../redux'

// export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
