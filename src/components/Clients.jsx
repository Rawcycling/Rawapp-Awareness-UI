// import React from 'react'
import '../styles/Clients.css'
import client_logo from '../assets/client_logo.png'

const Clients = () => {
  return (
    <div className='clients-container'>
    <div className='clients-container__header'>
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 10000+ clients</p>
    </div>

        <div className='client-logo-container'>
            <img src={client_logo} alt="" />
        </div>
    </div>
  )
}

export default Clients