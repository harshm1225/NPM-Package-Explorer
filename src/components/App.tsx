import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";
import "./App.css";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>NPM Package Explorer</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
