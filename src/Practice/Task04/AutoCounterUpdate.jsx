import { useEffect, useState } from 'react'


function App() {
  const [counter, setCounter]= useState(0);

  function updateCounter(){
    setCounter(prev => prev+1)
  }

  useEffect(function(){
    setInterval(updateCounter, 1000);
  },[])

  return (
    <>
      <div>
        {counter}
      </div>
    </>
  )
}

export default App
