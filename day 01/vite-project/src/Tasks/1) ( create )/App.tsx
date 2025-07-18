// import './App.css';
import { useCounter } from './store';

function App() {
  const {count, increment, decrement} = useCounter();
  return (
    <>
      <h1>count: {count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App