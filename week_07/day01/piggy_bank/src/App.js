import logo from './logo.svg';
import './App.css';
import PiggyBank from "./piggy_bank";

function App() {

  // const title = "Savings Pig"
  return (
    <div className="App">
      <PiggyBank title="Savings Pig" amount = {24} />
    </div>
  );
}

export default App;
