import { useState } from 'react'
import './App.css'

const Button = (props) => {
  return <button className="number" onClick={props.clickOn}>{props.name}</button>
}
const Operator = (props) => {
  return <button className="operator" onClick={props.clickOn}>{props.name}</button>
}
const Clear = (props) => {
  return <button className="clear" onClick={props.clickOn}>{props.name}</button>
}
const Equal = (props) => {
  return <button className="equal" onClick={props.clickOn}>=</button>
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const operators = ['+', '-', '*', '/']

function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')

  function check(btn) {
    if (operator === '') {
      setNum1(btn)
      console.log(btn)
    } else {
      setNum2(btn)
      console.log(btn)
    }
  }

  function equalCalc() {
    if (operator === '+') setResult(num1 + num2)
    else if (operator === '-') setResult(num1 - num2)
    else if (operator === '*') setResult(num1 * num2)
    else if (operator === '/') setResult(num1 / num2)
    else setResult(0)
  }

  function clearAll() {
    setNum1(0)
    setNum2(0)
    setOperator('')
    setResult(0)
  }
  function formatNumber(num1,operator,num2) {
    if (operator === '') return `${num1}`
    else if (operator !== '' && num2 === 0) return `${num1} ${operator}`
    else return `${num1} ${operator} ${num2}`
  }
  return (
    <>
      <div>
        <h2>{formatNumber(num1, operator, num2)}</h2>
        <Button name={numbers[0]} clickOn={() => check(numbers[0])} />
        <Button name={numbers[1]} clickOn={() => check(numbers[1])} />
        <Button name={numbers[2]} clickOn={() => check(numbers[2])} />
        <Operator name={operators[0]} clickOn={() => setOperator(operators[0])} />
        <br />
        <Button name={numbers[3]} clickOn={() => check(numbers[3])} />
        <Button name={numbers[4]} clickOn={() => check(numbers[4])} />
        <Button name={numbers[5]} clickOn={() => check(numbers[5])} />
        <Operator name={operators[1]} clickOn={() => setOperator(operators[1])} />
        <br />
        <Button name={numbers[6]} clickOn={() => check(numbers[6])} />
        <Button name={numbers[7]} clickOn={() => check(numbers[7])} />
        <Button name={numbers[8]} clickOn={() => check(numbers[8])} />
        <Operator name={operators[2]} clickOn={() => setOperator(operators[2])} />
        <br />
        <Clear name={"C"} clickOn={clearAll} />
        <Button name={numbers[9]} clickOn={() => check(numbers[9])} />
        <Equal clickOn={equalCalc} />
        <Operator name={operators[3]} clickOn={() => setOperator(operators[3])} />
        <br />
        <h2>Result: {result}</h2>
      </div>
    </>
  )
}

export default App
