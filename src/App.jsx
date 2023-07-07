import React from 'react'



import Hero from './assets/Hero'
import Info from './assets/Info'
import Gallery from './assets/Gallery'
import Footer from './assets/Footer'

function App() {

  return (
    <div className="App flex flex-col items-center min-h-screen">
      <Hero/>
      <Info/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
