import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let gotohome = useNavigate()
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-lg">

      <div onClick={() => {
        gotohome('/')
      }} className="text-xl font-bold tracking-tight hover:text-blue-400 cursor-pointer transition-colors">
        Router Learning
      </div>

      <div className="flex items-center gap-6">
        <Link to='/' className="hover:text-blue-400 cursor-pointer transition-colors text-sm font-medium">Home</Link>
        <Link to='/Projects' className="hover:text-blue-400 cursor-pointer transition-colors text-sm font-medium">Projects</Link>
        <Link to='/Products' className="hover:text-blue-400 cursor-pointer transition-colors text-sm font-medium">Product</Link>
        <Link to='/Contact' className="hover:text-blue-400 cursor-pointer transition-colors text-sm font-medium">Contact</Link>
        <Link to='/Skill' className="hover:text-blue-400 cursor-pointer transition-colors text-sm font-medium">Skill  </Link>

      </div>

    </nav>
  )
}

export default Navbar