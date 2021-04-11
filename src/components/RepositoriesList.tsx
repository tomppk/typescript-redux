// useDispatch hook gives us access to dispatch() actions directly inside our
// component. We can useDispatch to manually dispatch an action creator
// We need to import our action creators as well
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux';

// Annotate type as React.FunctionalComponent
const RepositoriesList: React.FC = () => {
  // Define local piece of state with default value of empty string
  // Define dispatch hook to use it
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  // Get correct type for event by ctrl+click event inside form ie.
  // <form onSubmit={e => console.log(e)}
  // Prevent default form submission.
  // Dispatch our search term to our searchRepositories action creator
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term));
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
