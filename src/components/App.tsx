// Provider gives react components access to redux store
// Import our redux store from redux index.ts
import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';

// Wrap our components inside Provider component and give it props of redux store
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
