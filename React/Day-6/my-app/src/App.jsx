import react from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Fruits from './Fruits'

function App() {
  
  return (
    <>
      <Router>
        <div>
          <nav>
            <ol>
              <li>
               {/* <Link to="/"> <h3>Home</h3></Link> */}
               <Link to="/fruits/apple">Apple</Link>
              </li>
              <li>
                {/* <Link to="/about"> <h3>About</h3></Link> */}
                <Link to="/fruits/banana">Banana</Link>
              </li>
              <li>
                {/* <Link to="menu"> <h3>Menu</h3></Link> */}
                <Link to="/fruits/mango">Mango</Link>
              </li>
            </ol>
          </nav>
          <Routes>
            {/* <Route path="/" exact Component={Home}></Route> */}
            {/* <Route path="/about" Component={About}></Route> */}
            {/* <Route path="/menu"  Component={Menu}></Route> */}
            <Route path="/fruits/:fruitsName" Component={Fruits}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
