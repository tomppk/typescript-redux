// Our useActions custom hook gives us access to dispatch() actions directly
// inside our component. We can use it to manually dispatch an action creator
// useSelector hook gives access to redux store, used with function components.
// Similar to mapStateToProps that is used with class based components
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

// Annotate type as React.FunctionalComponent
const RepositoriesList: React.FC = () => {
  // Define local piece of state with default value of empty string
  // Destructure searchRepositories action creator out of useActions hook
  // searchRepositories is 'bound' with bindActionCreator so its return value
  // is automatically dispatched
  // With this hook we do not need to use following inside this component
  // dispatch(actionCreators.searchRepositories(term));
  // useSelector receives as argument our entire state object from redux
  // we can return whole state, some of it or format it with the callback
  // Destructure properties out of state.repositories property
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  );
  console.log(state);

  // Get correct type for event by ctrl+click event inside form ie.
  // <form onSubmit={e => console.log(e)}
  // Prevent default form submission.
  // Dispatch our search term to our searchRepositories action creator
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    searchRepositories(term);
  };

  // Controlled input with local state term. Term is set to be the value
  // of input event so the key that is pressed.
  // When form is submitted call onSubmit callback
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
