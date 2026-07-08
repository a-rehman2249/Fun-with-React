import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <ToggleMessage/>
      <ToggleMessage/>
      <ToggleMessage/>
    </>
  )
}


const ToggleMessage=()=>{
  const [visible, setVisible]= useState(true);

  function toggleMessage(){
    setVisible(!visible);
  }

  return(
    <>
      <div style={{border : '2px dotted black' , width: '400px'}}>
        <div>
          <button onClick={toggleMessage}>{visible ? 'Hide':'Show'}</button>
        </div>
        {visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem minima officiis expedita aliquid soluta? Voluptatum provident deserunt quibusdam reiciendis voluptate.</p>}
        </div>
    </>
  )
}

export default App
