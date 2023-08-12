import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './Apps.jsx'
import './index.css'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
    <Home />
  </React.StrictMode>,
)
