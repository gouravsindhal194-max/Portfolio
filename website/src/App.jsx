import React from 'react'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card'
import Portfolio from './component/Portfolio/Portfolio'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Card/>
      <Portfolio/>
    </div>
  )
}

export default App
