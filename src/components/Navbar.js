import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className=' flex justify-around items-center py-4 text-2xl shadow w-full'>
    <NavLink to="/"  className={({ isActive }) =>
              isActive ? "text-black" : " text-gray-500"
            }>Home</NavLink>
    <NavLink to="/bookmarks"   className={({ isActive }) =>
              isActive ? " text-black" : " text-gray-500"
            }>Bookmarks</NavLink>
    </nav>
  )
}

export default Navbar
