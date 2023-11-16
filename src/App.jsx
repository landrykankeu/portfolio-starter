import React from 'react'
// components
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import BTS from './components/BTS'
import Home from './components/Home'
import Eve from './components/Eve'
import Header from './components/Header'
// import { RenderProvider } from './utils/Context'

const App = () => {
  return (
  // <RenderProvider>
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Nav />
      <Header /> 
      <Home />
      <BTS />
      <About />
      <Experience />
      <Eve />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  //  </RenderProvider>
    
  )
}

export default App
