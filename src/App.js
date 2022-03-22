import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  //Siempre que declaro un state se almacenan estos 2 nombres: uno para almacenar y otro para cambiar
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);
  const memory = useRef(0);

  const [resultsHistory, setResultsHistory] = useState([]);

  function changeFirstNumberHandler(event) {
    setFirstNumber(parseFloat(event.target.value));
  }

  function changeSecondNumberHandler(event) {
    setSecondNumber(parseFloat(event.target.value));
  }

  useEffect(
    () => {
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
    }
  )

  function addHandler() {
    const result = firstNumber + secondNumber;
    setResult(result);
  }

  function restHandler() {
    const result = firstNumber - secondNumber;
    setResult(result);
  }
  
  function multiplyHandler() {
    const result = firstNumber * secondNumber;
    setResult(result);
  }

  function divideHandler() {
    const result = firstNumber / secondNumber;
    setResult(result);
  }

  function deleteHandler() {
    setFirstNumber(0);
    setSecondNumber(0);
    setResult(0);
  }

  function MHandler() {
    memory.current = result;
    console.log(memory);
  }

  function MRHandler() {
    setFirstNumber(memory.current);
  }

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler} /><br />
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler} />

      <p>{result}</p>
      <button onClick={addHandler}>sumar</button>
      <button onClick={restHandler}>restar</button>
      <button onClick={multiplyHandler}>multiplicar</button>
      <button onClick={divideHandler}>dividir</button>
      <button onClick={deleteHandler}>C</button>
      <button onClick={MHandler}>M+</button>
      <button onClick={MRHandler}>MR</button>
    </>
  );
}

export default App;
