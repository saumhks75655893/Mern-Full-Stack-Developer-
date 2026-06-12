import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl text-blue-500">BLACK-MIRROR</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/settings">Setting</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
