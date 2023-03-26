import React from 'react'
import './Navbar.css' 
import './home'


function Navbar() {
  return (
    <nav className='nav-main'>
        <ul className='nav-item'>
            <li><a>Home</a></li>
            <li><a>FAQs</a></li>
            <li><a>Donation</a></li>
            <li><a>Explore Nashik</a></li>
            <li><a>Contact Us</a></li>
        </ul>
        
    </nav>
  )
}

export default Navbar
