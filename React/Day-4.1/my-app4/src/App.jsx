import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
    <h2>Class Component</h2>
    <div>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Show/Hide Index</button>
      {count < 6 ? <Index /> : <div> Index Component Removed...</div>}
    </div>
    </>
  )
}

export default App
