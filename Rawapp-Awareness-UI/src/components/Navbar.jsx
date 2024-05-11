// import React from 'react'
import '../styles/Navbar.css'
import rawcycling_logo from '../assets/rawcycling_logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar-container'>
            <div className='nav-logo'>
                <img src={rawcycling_logo} alt="RAWCYCLING" />
            </div>

            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className='nav-btn'>
                <button>Get App</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar