import { useEffect, useState } from 'react'


function App() {
  
  return (
    <>
      <Collapsable title='Section 1'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias corporis praesentium at reprehenderit. Natus ipsum, veniam aliquam minus ab architecto!</p>
      </Collapsable>
      <Collapsable title='Section 2'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias corporis praesentium at reprehenderit. Natus ipsum, veniam aliquam minus ab architecto!</p>
      </Collapsable>
    </>
  )
}

function Collapsable({title, children}){
  const [open, setOpen]=useState(false);

  return(
    <div
    style={{
      padding:'20px',
      margin: '10px',
      border:'2px solid black',
      borderRadius:'20px',
      backgroundColor:'brown'
    }}>
      <div style={
        {
          display:'flex',
          justifyContent:'space-around',
          marginBottom:'5px',
          alignItems:'center'
        }
      }>
        <h5>{title}</h5>
        <button 
          style={{
            padding:'2px',
            width:'50px',
            height:'30px',
            border:'2px solid black',
            backgroundColor:'grey',
    
          }} onClick={()=>{setOpen(prev=>!prev)}}
        >{open ? '+': '-'}</button>
      </div>
      <div>{open && children}</div>
    </div>
  )
}

export default App
