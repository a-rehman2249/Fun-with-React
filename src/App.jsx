import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <div style={{backgroundColor:'#ecf0f1',height:'100vh'}}>
          <div style={{border:'2px solid black', display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'20px',paddingTop:'20px'}}>
            <div>
              <PostComponent/>
            </div>
            <div>
              <PostComponent/>
            </div>
            <div>
              <PostComponent/>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

const my_style={
  backgroundColor: 'white',
  borderRadius: '10px',
  borderWidth: '1px',
  width:'300px',
  padding:'20px',
  borderColor:'grey',
}

function PostComponent(){
    return(
      <div style={my_style}>
        <div style={{display:'flex'}}> 
          <img src={'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'}
          style={{width:'40px',height:'40px',borderRadius: '50%', objectFit:'cover'}}
          />
          <div style={{fontSize:'10px',marginLeft:'5px'}}>
            <div style={{fontWeight:'bold', fontSize:'12px'}}>
              AbdulRehman
            </div>
            <div>
              12000 followers
            </div>
            <div>
              12m
            </div>
          </div>
        </div>
        <div style={{marginTop:'10px', fontSize:'14px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus obcaecati labore incidunt quaerat.
        </div>
      </div>
    )
}

export default App
