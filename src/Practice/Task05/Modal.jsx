import { useEffect, useState } from 'react'


function App() {
  const [modal, setModal]=useState(false);
  return (
    <>
      <button onClick={()=>{setModal(true)}}>Click Me to open Modal</button>
      <Modal isOpen={modal} onClose={()=>{setModal(false)}}>
         <h2>Modal Title</h2>
         <p>This is some content inside the modal.</p>
      </Modal>
      
    </>
  )
}

function Modal({isOpen, onClose ,children}){
  if(!isOpen){
    return null;
  }

  return(
    <div 
    style={{
      position:'fixed',
      top: 0,
      right:0,
      bottom:0,
      left:0,
      backgroundColor:'rgba(0,0,0,0.1)',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}    >
      <div
      style={{
        backgroundColor:'white',
        border:'1px solid black',
        padding: '10px',
        borderRadius:'20px'
      }}
      >
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}

export default App
