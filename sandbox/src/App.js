import React, { useState } from 'react';
import './App.css';
import Button from './Pages/Button'
import Practice1 from './Components/Practice1'
import Practice2 from './Components/Practice2'
import Pokemon from './Components/Pokemon'


function App() {
  const [show, makeShow] = useState(false)

  if (!show) {
  return (
    <div>
      <button onClick={() => makeShow(true)}>Click this button to bring up apps</button>
    </div>
    )
  } 
  
  if (show){
    return (
      <div>
        <button onClick={() => makeShow(false)}>Click this button to bring up apps</button>
        <Button />
        <Practice1 />
        <Practice2 />
        <Pokemon />
      </div>
    )
  }
}

export default App;
