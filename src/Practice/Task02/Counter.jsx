import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]= useState(0);

  function increasecount(){
    setCount(count+1);
  }

  return (
    <>
      <p>Count : {count}</p>
      <div>
        <button onClick={increasecount}>Click Me</button>
      </div>
    </>
  )
}

export default App
