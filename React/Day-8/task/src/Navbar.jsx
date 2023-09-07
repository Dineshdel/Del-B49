import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = 'nav'>
        <h3> Mobile Store</h3>
        <div className="menus"> 
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
        </div>

    </div>
  )
}

export default Navbar