/*import React, { useState, useEffect } from 'react'
import './App.css';

function Bye(props) {
  return (
    <div>
      <h1>Goodbye</h1>
      <p>Bye my friend: {props.name} {props.msg}</p>
    </div>
  )
}

function GreetMorning({sb}) {
  return(
    <h1>Good Morning: {sb}</h1>
  )
}

function Count() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You order ${count} items in total`;
  })
  return(
    <div>
      <button onClick={e=>setCount(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={e=>setCount(count+1)}>+</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Bye name="Nhat" msg="is rich"/>
      <GreetMorning sb="Nhat"/>
      <Count/>
    </div>
  );
}
export default App;*/

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Login from './components/Login/Login'
import Navi from './components/Nav/Nav'
/*
function Hello() {
  return <span>Welcome to the show!</span>
}

function WelcomeName(props) {
  return <h2>Welcome {props.name} to the show!</h2>
}

function WelcomeQuantity({quantity}) {
  return <h2>Welcome {quantity} people to the show!</h2>
}
*/

function App() {
  return (
    <div className="container">
      <Navi />
      <Jumbotron />
      <Login />
    </div>
  )
}
  
export default App
