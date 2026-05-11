import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/contact'
import Project from './pages/Project'
import Software from './pages/Software'
import Hardware from './pages/Hardware'
import Electronics from './pages/Electronics'
import PageNotAvailabe from './pages/PageNotAvailabe'
import Skill from './pages/Skill'
import MoreSkills from './pages/MoreSkills'
import Navigator from './components/Navigator'

const App = () => {
  return (
    <div className=' bg-slate-950 h-screen'>
      <Navbar />
      <Navigator />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Product />} >
          <Route path='Software' element={<Software />} />
          <Route path='Hardware' element={<Hardware />} />
          <Route path='Electronics' element={<Electronics />} />
        </Route>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Projects' element={<Project />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path='*' element={<PageNotAvailabe />} />

        <Route path='/Skill/:value' element={<MoreSkills />} />





      </Routes>
      <Footer />

    </div>
  )
}

export default App