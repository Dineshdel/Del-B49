import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ForestProvider } from './ForestContext'
import AnimalSound from './AnimalSound'
import ChangeSound from './ChangeSound'


function App() {

  return (
    <>
      <ForestProvider>
        <div>
          <h1>Forest Sounds App</h1>
          <AnimalSound />
          <ChangeSound />
        </div>
      </ForestProvider>
    </>
  )
}

export default App
