import './App.css';
import Counter from './components/Counter';
import Countries from './containers/Countries'

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Countries />
    </div>
  );
}

export default App;
