import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Summary from './components/Summary'
import Explore from './components/Explore'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <About/>
      <Summary/>
      <Explore/>
      <Footer/>
    </>
  )
}

export default App
