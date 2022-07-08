import React, { useEffect } from 'react';
import './App.css';
import { useState } from "react";


function App(props) {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");


function handleSubmit(e) {
  e.preventDefault()
  
  const addItem = {
    id: new Date().getTime(),
    text: newItem,
    completed: false,
  }

  setList([...list].concat(addItem))
  setNewItem("")
}

function deleteItem(id){
  const updateList = [...list].filter((newItem) => newItem.id !== id)

  setList(updateList)
};

  

  return (
    <div>
      <h1>MY LIST</h1>

      <div className='App'>
        <div>
          Add an Item...
       
        <br/>

        <form onSubmit={handleSubmit}>
        <input className='input' type='text' placeholder='Type item here...'
        value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        <button className='btn' type='submit'>ADD</button>
        </form>
        

        <ul>
         {list.map((newItem) => <li key={newItem.id}>
          {newItem.text}
          <button className='btn del-btn' onClick={() => deleteItem (newItem.id)}>X</button>
         </li>)}
        </ul>
        
        </div>
      </div>
    </div>
  )
}

export default App;