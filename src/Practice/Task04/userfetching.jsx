import { useEffect, useState } from 'react'


function App() {
  const [users, setUsers]= useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    async function getUsers(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();
        
        setUsers(data);
      }
      catch(error){
        console.error(`Error fetching data : ${error}`);
      }
      finally{
        setLoading(false);
      }

    }

    getUsers();
  },[])


  if(loading){
    return <div>loading ... </div>
  }
  return (
    <>
      {users.map(user=>user.name)}
    </>
  )
}

export default App
