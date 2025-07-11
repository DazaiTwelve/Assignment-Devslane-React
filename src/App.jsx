import React, { useState } from 'react' 
import Table from './Table'
function App() {
  let key1="Table1"
  let key2="Table2"
  const [flip,setFlip]=useState(false);
  if(flip){
    key1="Table2";
    key2="Table1";
  }
  function flipKey(){
    setFlip(!flip)
  }
  return (
    <div className='flex gap-5 items-center'>
      <Table key={key1}/>
      <Table key={key2}/>
      <button className='bg-red-400 px-3 py-1 rounded-md text-white' onClick={flipKey}>Interchange</button>
    </div>
  )
}

export default App
