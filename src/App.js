import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(0);
  const [ secondNumber, setSecondNumber ] = useState(0);
  let [ result, setResult ] = useState(0);


  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
    }
  )

  function addHandler () {
    result=parseFloat(firstNumber)+parseFloat(secondNumber);
    setResult(result);
  }

  function restHandler () {
    result=parseFloat(firstNumber)-parseFloat(secondNumber);
    setResult(result);
  }
  function multiplyHandler () {
    result=parseFloat(firstNumber)*parseFloat(secondNumber);
    setResult(result);
  }
  function divideHandler () {
    result=parseFloat(firstNumber)/parseFloat(secondNumber);
    setResult(result);
  }

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/><br/>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>

      <p>{result}</p>
      <button onClick={addHandler }>sumar</button>
      <button onClick={restHandler }>restar</button>
      <button onClick={multiplyHandler }>multiplicar</button>
      <button onClick={divideHandler }>dividir</button>
    </>
  );
}

export default App;
