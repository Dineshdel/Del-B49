import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div id="main">
    <Post name="POST 1" flag="true"/>
    <Post name="POST 2" flag="false"/>
    </div>
  </React.StrictMode>,
)
