import React from 'react'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            
            <div className="logo">deepakbooking</div>

            <div className="navItems">
                <div className="navButton">Register</div>
                <div className="navButton">Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar