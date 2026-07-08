import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <div style={{backgroundColor:'#ecf0f1'}}>
          <div style={{ display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'20px',paddingTop:'20px'}}>
            <div>
              <PostComponent/>
            </div>
            <div>
              <PostComponent/>
            </div>
            <div>
              <PostComponent/>
            </div>
            <div>
              <ProfileComponent/>
            </div>
             <div>
        <ProfileComponent/>
      </div>
       <div>
        <ProfileComponent/>
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

const profile_style={
  backgroundColor: 'white',
  width:'200px',
  borderRadius: '20px',

}

function ProfileComponent(){
   return(<>
      <div style={profile_style}>
        <div style={{height:'60px',borderRadius:'10px',backgroundColor:'#7f8c8d'}}></div>
        <div style={{position:'relative',bottom:'30px'}}>
          <div style={{display:'flex', justifyContent:'center', }}>
            <img src={'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'}
            style={{width:'70px',height:'70px',borderRadius: '50%', objectFit:'cover'}}/>
          </div>
          <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', gap:'5px' , fontSize :'16px',padding:'10px'}}>
              <div style={{fontWeight:'bold'}}>AbdulRehman</div>
              <div style={{color:'grey', fontSize:'14px'}}>12000 followers</div>
            </div>
            <div style={{padding:'10px'}}>
              <div style={{display:'flex' , justifyContent:'space-between'}}>
                <div>Role</div>
                <div style={{color:'blue'}}>Developers</div>
              </div>
              <div style={{display:'flex' , justifyContent:'space-between' ,marginTop:'5px'}}>
                <div>Experience</div>
                <div style={{color:'blue'}}>2 years</div>
              </div>
            </div>
        </div>
        </div>
        
      </div>
   </>)
}

export default App
