import { useEffect, useState } from 'react'


function App() {
  const items=[
    {'id':1, 'name':'item 01'},
    {'id':2, 'name':'item 02'},
    {'id':3, 'name':'item 03'},
    {'id':4, 'name':'item 04'},
  ]
  return (
    <>
      <ItemList items={items}/>
    </>
  )
}

function ItemList({items}){
  return(
    <>
      <ul>
        {items.map((item, index)=><li key={index}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default App
