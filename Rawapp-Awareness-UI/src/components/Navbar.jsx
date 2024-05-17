// import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import rawcycling_logo from '../assets/rawcycling_logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar-container'>
            <div className='nav-logo'>
            <Link to={`/`}><img src={rawcycling_logo} alt="RAWCYCLING" /></Link>
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
                <Link to={`/waitlist`}><button>Get App</button></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar