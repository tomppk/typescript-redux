import { useState } from 'react';

// Annotate type as React.FunctionalComponent
const RepositoriesList: React.FC = () => {
  // Define local piece of state with default value of empty string
  const [term, setTerm] = useState('');

  // Get correct type for event by ctrl+click event inside form ie.
  // <form onSubmit={e => console.log(e)}
  // Prevent default form submission
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
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
