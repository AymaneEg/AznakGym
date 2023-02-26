import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './Containers/HomePage/HomePage'
import AboutGym from './Containers/AboutGym/AboutGym'
import Offers from './Containers/Offers/Offers'

function App() {
  return (
    <div className="App">
         <HomePage/>
         <AboutGym/>
         <Offers/>
    </div>
  )
}

export default App
