import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './Containers/HomePage/HomePage'
import AboutGym from './Containers/AboutGym/AboutGym'

function App() {
  return (
    <div className="App">
         <HomePage/>
         <AboutGym/>
    </div>
  )
}

export default App
