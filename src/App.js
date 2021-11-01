import { useEffect, } from 'react';

import logo from './logo.svg';
import './App.css';

/**
 * El va de 10 a 0.
 * Al llegar a 0 se decide si hacer reset o no.
 * 
 */

function App(props) {
  const { add, reset, thick, } = props;
  useEffect(() => {
    if (props.counter > 0)
      setTimeout(() => {
        thick();
      }, 1000);
  });
  return (
    <div className="App">
      <h2>{props.counter > 0 ? `Counter: ${props.counter}` : 'Its over!'}</h2>
      {props.counter == 0 ? <button className="btn" onClick={() => reset()}>Reset</button> : null}
    </div>
  );
}

export default App;
