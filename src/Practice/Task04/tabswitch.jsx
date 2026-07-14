import { useEffect, useState } from 'react'


function App() {
  const [tab,setTab]=useState(1);
  const [data, setData]=useState("");
  const [loading, setLoading]=useState(true);

  useEffect(function(){
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + tab).
    then(async res=>{
      const json= await res.json();
      setData(json.title);
      setLoading(false);
    })
  },[tab])
  

  return (
    <>
      <div>
        <button onClick={()=>{setTab(1)}} style={{color: tab === 1? 'red':'black'}}>Tab 1</button>
        <button onClick={()=>setTab(2)} style={{color: tab === 2? 'red':'black'}}>Tab 2</button>
        <button onClick={()=>setTab(3)} style={{color: tab === 3? 'red':'black'}}>Tab 3</button>
        <button onClick={()=>setTab(4)} style={{color: tab === 4? 'red':'black'}}>Tab 4</button>
      </div>
      <div>
        {loading ? <p>loading...</p>: <p>{data}</p>}
      </div>
    </>
  )
}

export default App
