import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom'
import All from './All'
import FSD from './FSD'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
       <Route path='/All' element={< All />} /> 
      <Route path='/FSD' element={<FSD />} />
      <Route path='/DataScience' element={<DataScience/>} />
      <Route path='/CyberSecurity' element={<CyberSecurity/>} />
      <Route path='/Career' element={<Career/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
