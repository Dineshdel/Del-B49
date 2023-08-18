import React, {useState, useEffect}from 'react'

function LifeCycle() {

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Compont Mount...");
  },[]);

  useEffect(() => {
    console.log("Componts update...");
  });

  return (
    <div>
      <h2>Life Cycle</h2>
      <p>Count: {state}</p>
      <button onClick = {(() => setState(state + 2))}> Increase </button>
    </div>
  )
}

export default LifeCycle