import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../src/Store/store';
import Navigation from "./routes/navigation";
function App() {
  return (
  <Provider store={store}>
    <div className="App">
       <Navigation />
    </div>
 </Provider>
  );
}

export default App;
