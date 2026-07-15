import { useEffect, useState } from 'react'


function App() {
  
  return (
    <>
      <div>
        <Card>
          <h1>Somestuff</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore quisquam fuga. Ea, optio! Laudantium magni rem voluptatem fugit excepturi! Vitae.</p>
        </Card>
      </div>
      <div>
        <Card>
          <h1>Nothing to show</h1>
        </Card>
      </div>
    </>
  )
}

function Card({children}){
  return(
      <div style={{border: '1px dotted black', borderRadius: '20px', padding: '20px', margin: '20px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',}}>
        {children}
      </div>
  )
}

export default App
